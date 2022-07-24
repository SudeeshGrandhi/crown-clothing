import {
  signInWithGooglePopup,
  signInWithFacbook,
  userCollectionFromAuthentication,
} from "../../utils/firebase/firebase.utils";

const logGoogleUser = async () => {
  const response = await signInWithGooglePopup();
  const { user } = response;
  console.log(user);

  userCollectionFromAuthentication(user);
};

const SignIn = () => {
  return (
    <div>
      <h1>I am Sign In Component</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <br />
    </div>
  );
};

export default SignIn;
