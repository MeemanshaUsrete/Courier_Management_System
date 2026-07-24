import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import NewShipment from "./pages/NewShipment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={<Profile/>}/>    
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />}/>    
        <Route path="/newshipment" element={<NewShipment/>}/>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;