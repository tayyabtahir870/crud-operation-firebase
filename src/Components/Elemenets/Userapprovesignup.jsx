import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import { db, storage } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";

function Userapprovesignup() {
  const [name, setName] = useState("");

  const [email, setEmial] = useState("");


 
  const navigate = useNavigate("");

  

  const submitimage = async (e) => {
    navigate("/signin")
    await addDoc(collection(db, "users"), {
      name: name,
    
      email: email,
   
     
    });
   
   
  };

 

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className=" card   ">
            <div className="mt-5 my-3">
              <input
                className="inputfeild"
                type="password"
                placeholder="Enter Your Password"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
      
            <div className="my-3">
              <input
                className="inputfeild"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => {
                  setEmial(e.target.value);
                }}
              />
            </div>

          
         

          

          
             
              <div className="mt-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={submitimage}
                >
                  Submit
                </button>
              </div>

            </div>

            
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
  
  );
}

export default Userapprovesignup;
