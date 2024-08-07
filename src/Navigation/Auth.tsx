import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Auth/Deshboard/Dashboard";

const Auth = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Auth;
