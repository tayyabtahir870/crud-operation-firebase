import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import auth, { db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection} from "firebase/firestore/lite";
// import { v4 } from "uuid";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [feild, setFeild] = useState("");
  // const [uid, setUserId] = useState("");
  const navigate = useNavigate("");

  const SignUp = (e) => {
    e.preventDefault();
    addDoc(collection(db, "user"), {
      
      password:password,
    });

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/signin");
      })

      .catch((error) => console.log(error));
  };

  const notify = () => {
    toast("Signup Successful");
  };

  const signuppassword = (event) => {
    setPassword(event.target.value);
    let item = event.target.value;
    if (item.length < 6) {
      setPassworderror(true);
    } else {
      setPassworderror(false);
    }
  };

  const signupemail = (event) => {
    setEmail(event.target.value);
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    if (regex.test(email) === false) {
      setEmailerror(true);
    } else {
      setEmailerror(false);
    }
  };

  return (
    <div className="container signUp">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center card mt-5">
          <form onSubmit={SignUp}>
            <img src="Assest/signup.jpg" alt="" width={150} />
            <h3>User Signup</h3>
            <div className="my-3">
              <input
                className="inputfeild"
                type="text"
                placeholder="Your Feild"
                id="datauser"
                value={feild}
                onChange={(e) => {
                  setFeild(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="feild "
                type="email"
                id="datauser"
                value={email}
                placeholder="enter your email"
                onChange={signupemail}
              />
              <br />
              {emailerror ? (
                <span className="passwordclr ">Email is not valid</span>
              ) : (
                ""
              )}
            </div>

            <br />
            <div>
              <input
                className="feild"
                type="password"
                id="datauser"
                value={password}
                placeholder="enter your password"
                onChange={signuppassword}
              />
            </div>
            {passworderror ? (
              <span className="passwordclr">
                Password must be greater then 6 digit
              </span>
            ) : (
              ""
            )}
            <br />

            <button onClick={notify} className="loginbtn my-4" type="submit">
              sign up
            </button>
            <div>
              <br />
              <h6>Already have an account?</h6>
              <h6>
                <Link className="loginpage1" to="/signin">
                  Login
                </Link>
              </h6>
              <ToastContainer />
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default SignUp;
