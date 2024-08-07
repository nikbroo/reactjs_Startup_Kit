import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/UnAuth/Login/Login";
import Signup from "../Pages/UnAuth/Signup/Signup";

const UnAuth = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UnAuth;
