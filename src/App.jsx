import { Routes, Route } from "react-router-dom";



import Login from "./pages/Login";
import Register from "./pages/Register";
import FirstPage from "./pages/firstpage";
import "./App.css";
import Freelancerdashboard from "./pages/Freelancerdashboard";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    
        <Route path="/freelancerdashboard" element = {<Freelancerdashboard/>}/>
      </Routes>
    
  );
}

export default App;

