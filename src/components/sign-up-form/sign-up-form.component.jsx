import { useState } from "react";
import {
  createAuthUserFromEmailAndPassword,
  userCollectionFromAuthentication,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.component";

import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";
const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onHandleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    } else {
      try {
        const response = await createAuthUserFromEmailAndPassword(
          email,
          password
        );
        const { user } = response;
        await userCollectionFromAuthentication(user, { displayName });
        setFormFields(defaultFormFields);
      } catch (err) {
        switch (err.code) {
          case "auth/email-already-in-use":
            alert("Email already exists");
            break;
          case "auth/weak-password":
            alert("password should be atleast 6 letters");
            break;
          default:
            console.log("user creation encountered an error", err);
        }
        // if (err.code === "auth/email-already-in-use") {
        //   alert("Email already exists");
        // } else {
        //   console.log("user creation encountered an error", err);
        // }
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={onHandleChange}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={onHandleChange}
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
