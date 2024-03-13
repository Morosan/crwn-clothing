import { useState } from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { googleSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  
  const resetFormFields = () => { 
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
    alert('Succes, you signed in with Google.');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email, 
        password
      );
      resetFormFields();
      alert('Succes, you signed in.');

    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password' : 
          alert('Incorrect password for email')
          break
        case 'auth/user-not-found' :
          alert('No user associated with this email')
          break;
        case 'auth/invalid-credential' :
          alert('Wrong username or wrong password')
          break;
        default:
          console.log(error);
      } 
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value});
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with yout email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label="Password"
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

      <div className="buttons-container">
        <Button 
          type='submit'
        >
          Sign In
        </Button>
        <Button
          type='button'
          buttonType='google'
          onClick={signInWithGoogle}>
          Google Sign In
        </Button>
      </div>
      </form>

    </div>
  )
}

export default SignInForm;