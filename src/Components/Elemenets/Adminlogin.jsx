import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import auth from "../../firebase";
import { Link,useNavigate } from "react-router-dom";

function Adminlogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate=useNavigate("");
  
    const SignIn = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password)
      // .then(auth=>{navigate("/admindashboard")})
      // .catch(error=>console.log(error))
      if (email === 'tayyabtahir870@gmail.com' && password === 'tayyab870') {
        toast("Admin Login Successful")
        setIsAdmin(true);
        setLoggedIn(true);
        
        navigate("/adminapannel")
        }
       
       else {
        toast('Invalid Login');
      }
    };


    const handleLogout = () => {
      setLoggedIn(false);
      setIsAdmin(false);
    };
  
    // const notify = () =>{
    //   toast("Login Successful");


      
    // }
  return (
    <div className="container signIn ">
    <div className="row">
      <div className="col-md-4">
  
      </div>
    <div className="col-md-4 card mt-5  text-center">
    {loggedIn ? (
      <div>
        <h1>Welcome {isAdmin ? 'Admin' : 'User'}</h1>

        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
  <form
   onSubmit={SignIn} 
  >
    <img className="mt-3" src="Assest/admin.png" alt="" width={120} />
    <h3>Admin Login</h3>
    <br />
    <div>
    <input className="feild"
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
    </div>
     <br />

    <div>
    <input className="feild"
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
    </div>
    <br />
    <button  type="submit" className="loginbtn ">Login</button>
    
    <div>
    <ToastContainer />
      <br />
      <h6>Create new account?</h6>
      <h6>
        <Link className="loginpage" to="/adminsignup">Sign Up</Link>
      </h6>
    </div>
  </form >
   )}
</div>

<div className="col-md-4">
  
      </div>

    </div>
</div>
  )
}

export default Adminlogin