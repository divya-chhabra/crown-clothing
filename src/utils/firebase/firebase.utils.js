import { initializeApp } from 'firebase/app';
import { onAuthStateChanged, getAuth, signInWithPopup, signInWithRedirect, signOut, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc,getDoc,setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_UpB_N926Wh5T3U3akvPhv_REvJH5MKI",
    authDomain: "crwn-clothing-db-de9b9.firebaseapp.com",
    projectId: "crwn-clothing-db-de9b9",
    storageBucket: "crwn-clothing-db-de9b9.appspot.com",
    messagingSenderId: "915304678625",
    appId: "1:915304678625:web:2be5a0e040b2f18fc1a3a0"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({

    prompt:"select_account"

  })

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup (auth,googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect (auth,googleProvider);


  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) => {

      const collectionRef = collection(db, collectionKey);
      const batch = writeBatch(db);

      objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
      });

      await batch.commit();
      console.log('done');

  }

  export const getCategoriesAndDocuments = async () =>{

        const collectionRef = collection(db, 'categories');
        const q = query(collectionRef);


        const querySnapshot = await getDocs(q);
        const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
          const { title , items } = docSnapshot.data();
          acc[title.toLowerCase()] = items;
          return acc;
          
        }, {});

        return categoryMap;
  }

  export const createUserDocumentfromAuth = async(userAuth, additionalInformation={}) => {

      if(!userAuth) return;

      const userDocRef = doc(db,'users', userAuth.uid)
      

      const userSnapshot = await getDoc(userDocRef);      

      if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation})
        }
        catch(error){
            console.log('error in creating a user' , error.message);
        }
      }
  }

  export const createAuthUserwithEmailAndPassword = async(email,password) => {

      if(!email || !password) return;

      return await createUserWithEmailAndPassword(auth, email, password);

  }

  export const signInAuthUserwithEmailAndPassword = async(email,password) => {

    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = async() => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback )

