import React, {useState} from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore/lite";
import { db, storage } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import firebase from "../../firebase";

function Adddata() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmial] = useState("");
  const [feild, setFeild] = useState("");
  const [imageupload, setImageupload] = useState(null);
  const [startdate, setStartdate] = useState("");
  const [imageList, setImageList] = useState([]);
  const [endsecdate, setEndsecdate] = useState("");
  const navigate = useNavigate("");

  
  const imageListRef = ref(storage, "images/");
  const submitimage = async (e) => {
    
    navigate("/crud")
    await setDoc(doc(db, "users", email), {
      name: name,
      age: age,
      email:email,
      startdate: startdate,
      endsecdate: endsecdate,
      feild: feild
    });
   
    if (imageupload == null) return;
    const imageRef = ref(storage, `images/${imageupload.name + v4()}`);
    uploadBytes(imageRef, imageupload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className=" card   ">
            <div className="mt-5 my-3">
              <input
                className="inputfeild"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="my-3">
              <input
                className="inputfeild"
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
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

            <div className="my-3">
              <input
                className="inputfeild"
                type="text"
                placeholder="Your Feild"
                value={feild}
                onChange={(e) => {
                  setFeild(e.target.value);
                }}
              />
            </div>
            <div className="my-3">
              <label htmlFor="">
                <b>Start Date:</b>{" "}
              </label>{" "}
              &nbsp; &nbsp;
              <input
                className="inputfeild"
                type="date"
                placeholder="Start Date"
                value={startdate}
                onChange={(e) => {
                  setStartdate(e.target.value);
                }}
              />
            </div>

            <div className="my-3">
              <label htmlFor="">
                <b>End Date:</b>{" "}
              </label>{" "}
              &nbsp; &nbsp;
              <input
                className="inputfeild"
                type="date"
                placeholder="Start Date"
                value={endsecdate}
                onChange={(e) => {
                  setEndsecdate(e.target.value);
                }}
              />
            </div>

            <div className="my-3">
              <input
                type="file"
                onChange={(e) => {
                  setImageupload(e.target.files[0]);
                }}
              />
              <div className="mt-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={submitimage}
                >
                  Submit
                </button>
              </div>

              <div className="my-3">
                {imageList.map((url) => {
                  return <img src={url} alt="" width={100} />;
                })}
              </div>
            </div>

            
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Adddata;
