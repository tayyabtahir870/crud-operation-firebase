import "./App.scss";
import SignUp from "./Components/Elemenets/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Elemenets/Home";
import SignIn from "./Components/Elemenets/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import Biodata from "./Components/Elemenets/Biodata";
import Adddata from "./Components/Elemenets/Adddata";
import Editdata from "./Components/Elemenets/Editdata";
import Showdata from "./Components/Elemenets/Showdata";
import Hero from "./Components/Elemenets/Hero";
import Role from "./Components/Elemenets/Role";
import Adminlogin from "./Components/Elemenets/Adminlogin";
import Admindashboard from "./Components/Elemenets/Admindashboard";
import Adminsetup from "./Components/Elemenets/Adminsetup";
import Userapprovesignup from "./Components/Elemenets/Userapprovesignup";
import Adminsignup from "./Components/Elemenets/Adminsignup";
import Adminapannel from "./Components/Elemenets/Adminapannel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Role/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/crud" element={<Biodata />} />
          <Route path="/adddata" element={<Adddata />} />
          <Route path="/editdata/:id" element={<Editdata />} />
          <Route path="/showdata" element={<Showdata />} />
          <Route path="/hero" element={<Hero/>} />
          <Route path="/adminlogin" element={<Adminlogin/>} />
          <Route path="/admindashboard" element={<Admindashboard/>} />
          <Route path="/adminsetup" element={<Adminsetup/>} />
          <Route path="/approvesignup" element={<Userapprovesignup/>} />
          <Route path="/adminsignup" element={<Adminsignup/>} />
          <Route path="/adminapannel" element={<Adminapannel/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



