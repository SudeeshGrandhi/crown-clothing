import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import { Route, Routes } from "react-router";
const App = () => {
  const Shop = () => {
    return (
      <div>
        <div>I am the Shop Page</div>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
