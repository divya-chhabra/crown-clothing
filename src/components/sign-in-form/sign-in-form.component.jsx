import { useState } from 'react';
import { signInWithGooglePopUp,createUserDocumentfromAuth, signInAuthUserwithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import { ButtonsContainer, SignUpContainer } from './sign-in-form.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password} = formFields;

    

    console.log(formFields);

    const SignInWithGoogle = async() => {
        await signInWithGooglePopUp();
        
    }

    const handleChange = (event) => {

            const {name, value} = event.target;
            setFormFields( {...formFields,[name]:value})
    }

    const handleSubmit = async(event) => {
            event.preventDefault();

            try{
                
                const {user} = await signInAuthUserwithEmailAndPassword(email,password);
                
                
                
                resetFormFields();
            }
            catch(error){

                switch(error.code){
                    case "auth/wrong-password": 
                        alert("Incorrect Password for email");
                        break;
                    case "auth/user-not-found": 
                        alert("User does not exist");
                        break;
                    default:
                        console.log(error);
                                                
                }
                
                
                console.log(error);
            }
        }

        const resetFormFields = () =>{
            setFormFields(defaultFormFields);
        }

    
    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password </span>
            <form onSubmit={handleSubmit}>                
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                
                <ButtonsContainer>
                        <Button type="submit">Sign In</Button>
                        <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>

                
            </form>
        </SignUpContainer>

    )
}

export default SignInForm;