// import { signInWithGooglePopUp, createUserDocumentfromAuth } from "../../utils/firebase/firebase.utils"
// import {auth, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils';
// import { useEffect } from 'react';
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
    
    // useEffect( () => {
    //     async function fetchData() {
    //         // You can await here
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentfromAuth(response.user);
    //         }
            
    //       }
    //       fetchData();
            
    // }, []);

    

    return(
            <AuthenticationContainer>

                {/* <button onClick={logGoogleUser}>Sign In with Google Pop Up</button> */}
                {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}

                <SignInForm />
                <SignUpForm />
                
            </AuthenticationContainer>
    )

}

export default Authentication