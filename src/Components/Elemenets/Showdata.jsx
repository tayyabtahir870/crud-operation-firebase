import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteDoc, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Showdata() {
  const [users, setUsers] = useState([]);

  async function getuserdata(email) {
    const docRef = doc(db, "users", email);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setUsers(snapshot.data());
    }
  }

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        getuserdata(email);
      }
    });
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
          {users && (
            <tr>
              <td>{users.name}</td>
              <td>{users.age}</td>
              <td>{users.email}</td>
              <td>{users.feild}</td>
              <td>{users.startdate}</td>
              <td>{users.endsecdate}</td>

              <td>
                <Link className="edit" to={`/editdata/${users.email}`}>
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => del(users.email)}
                  type="button"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
              <ToastContainer />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Showdata;
