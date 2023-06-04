import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";

function Editdata() {
  const { id } = useParams();
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email,setEmail]=useState("");
  const [ename, setEname] = useState("");
  const [eage, setEge] = useState("");
  const [eemail, setEemail] = useState("");
  const [startdate,setStartdate]=useState("");
  const [startedate,setEstartdate]=useState("");
  const docRef = doc(db, "users", id);

  const getd = async () => {
    const userSnapshot = await getDoc(docRef);
    setEname(userSnapshot.data().name);
    setEge(userSnapshot.data().age);
    setEemail(userSnapshot.data().email);
    setEstartdate(userSnapshot.data().startdate);
    
  };

  getd();

  const update = async () => {
    await updateDoc(docRef, {
      name: name,
      age: age,
      email: email,
      startdate: startdate,
      
    

    });
  };
  return (
  <div className="container text-center">
    <div className="row">
      <div className="col-md-4">

      </div>
      <div className="col-md-4">
      <div className="card mt-5  p-5">
      <div className="mt-5">
        <input
          className="inputfeild"
          type="text"
          placeholder={ename}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="my-4">
        <input
          className="inputfeild"
          type="text"
          placeholder={eage}
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>
      <div className="my-2 ">
        <input
        className="inputfeild"
          type="text"
          placeholder={eemail}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="my-2 ">
        <input
        className="inputfeild"
          type="text"
          placeholder={startedate}
          value={startdate}
          onChange={(e) => {
            setStartdate(e.target.value);
          }}
        />
      </div>
    
      <div className="mt-4">
       
        <button  type="submit"  onClick={() => {
            update(navigate("/crud"));
          }} class="btn btn-info">Update</button>
      </div>
    </div>
      </div>
      <div className="col-md-4">

      </div>
    </div>
  </div>
  );
}

export default Editdata;
