import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";
import Button from "../button/button.component";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./sign-in-form.styles.jsx";

import FormInput from "../form-input/form-input.component";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const onHandleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserFromEmailAndPassword(email, password);

      setFormFields(defaultFormFields);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };

  const signInGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <h1>Sign In With Your Email And Password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={onHandleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={onHandleChange}
        />
        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button
            onClick={signInGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
          >
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
