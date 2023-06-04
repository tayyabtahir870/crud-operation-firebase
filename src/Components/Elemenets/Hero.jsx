import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../firebase";
import {useNavigate } from "react-router-dom";

function Hero() {
  const naviagte = useNavigate();
  const [numbererror,setNumbererror]=useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    age: "",
  });
  let name, value;
  const postuserdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postuserdatanumber = (event) => {
    let item=event.target.value;
    if(item.length<11){
      setNumbererror(true)
    }else if(item.length>11){
      setNumbererror(true)
    }
    else{
      setNumbererror(false)
    }
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const submituserdata = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phone, address, message, age } = user;
    if (firstName && lastName && email && phone && address && message && age) {
      const res = fetch(
        "https://syntecx-d6634-default-rtdb.firebaseio.com/userdatarecordfrom.json",
        {
          method: "POST",
          headers: {
            "Content.Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            address,
            message,
            age,
          }),
        }
      );

      if (res) {
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          age: "",
        });
        toast("Congratulation, Your Data has been submitted!");
      } else {
        toast("Kindly fill all the required fields");
      }
    } else {
      toast("Kindly fill all the required fields");
    }
  };

  const signoutclick = () => {
    auth.signOut();
    naviagte("/");
  };
  return (
    <div>
      <div className="container text-center card mt-5">
        <div className="row mt-5">
          <h1>Welcome {user?.firstName}</h1>
          <h3>Contact Us</h3>
        </div>
        <form method="POST" >
          <div className="row mt-5 ">
            <div className="col-md-6  ">
              <div>
                <input
                className="inputfeild"
                  type="text"
                  placeholder="Enter Your First Name"
                  value={user.firstName}
                  onChange={postuserdata}
                  name="firstName"
                />
              </div>
              <br />
              <div>
                <input
                className="inputfeild"
                  type="text"
                  placeholder="Enter Your Address"
                  value={user.address}
                  onChange={postuserdata}
                  name="address"
                />
              </div>
              <br />
              <div>
                <input
                className="inputfeild"
                  type="email"
                  placeholder="Enter Your Email"
                  value={user.email}
                  onChange={postuserdata}
                  name="email"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input
                className="inputfeild"
                  type="text"
                  placeholder="Enter Your Last Name"
                  value={user.lastName}
                  onChange={postuserdata}
                  name="lastName"
                />
              </div>
              <br />
              <div>
                <input
                className="inputfeild"
                  type="Number"
                  placeholder="Enter Your Age"
                  value={user.age}
                  onChange={postuserdata}
                  name="age"
                />
              </div>
              <br />
              <div>
                <input
                className="inputfeild"
                  type="number"
                  placeholder="Enter Your Phone Number"
                  value={user.phone}
                  onChange={postuserdatanumber}
                  name="phone"
                />
                <br />
                 {numbererror?<span className="passwordclr ">Phone Number not valid</span>:""}
              </div>
            </div>
          </div>
        </form>
        <br />

        <textarea
          className="inputfeild"
          name="message"
          placeholder="Your Feedback"
          form="usrform"
          value={user.message}
          onChange={postuserdata}
        >
          Enter text here...
        </textarea>
        <div className="mt-3">
          <button
            type="submit"
            class="btn btn-primary"
            onClick={submituserdata}
          >
            Submit
          </button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => signoutclick()}
            type="button"
            class="btn btn-primary"
          >
            SignOut
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Hero;
