import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase";
import { Link } from "react-router-dom";


function Admindashboard() {
  const [users, setUsers] = useState([]);

  async function getCities(db){
    const citiesCol=collection(db,"users");
    const citySnapshot= await getDocs(citiesCol);
    const cityList= citySnapshot.docs.map(doc=>({
      ...doc.data(),id:doc.id
  }))
    setUsers(cityList);
  }

  useEffect(() => {
   getCities(db);
  }, []);

  const del = async (email) => {
    const docRef = doc(db, "users", email);
    await deleteDoc(docRef);
    toast("Data was deleted successfully");
  };

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col-md-2">Name</th>
            <th scope="col-md-2">Age</th>
            <th scope="col-md-2">Email</th>
            <th scope="col-md-2">Feild</th>
            <th scope="col-md-2">Start Date</th>
            <th scope="col-md-2">End Date</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((u)=>{
               return(
                <tr>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>{u.email}</td>
                <td>{u.feild}</td>
                <td>{u.startdate}</td>
                <td>{u.endsecdate}</td>
  
                <td>
                  <Link className="edit" to={`/editdata/${u.email}`}>
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => del(u.email)}
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <ToastContainer />
              </tr>
               )
            })
          }
           
          
        </tbody>
      </table>
    </div>
  );
}

export default Admindashboard;
