import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import auth from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/crud");
      })
      .catch((error) => console.log(error));
  };

  const notify = () => {
    toast("Login Successful");
  };
  return (
    <div className="container signIn ">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 card mt-5  text-center">
          <form onSubmit={SignIn}>
            <img src="Assest/Login.jpg" alt="" width={150} />
            <h3>User Login</h3>
            <br />
            <div>
              <input
                className="feild"
                type="email"
                id="email "
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <br />

            <div>
              <input
                className="feild"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            
            <br />
            <button onClick={notify} type="submit" className="loginbtn ">
              Login
            </button>

            <div>
              <ToastContainer />
              <br />
              <h6>Create new account?</h6>
              <h6>
                <Link className="loginpage" to="/approvesignup">
                  Sign Up
                </Link>
              </h6>
            </div>
          </form>
        </div>

        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default SignIn;
