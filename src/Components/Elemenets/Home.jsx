import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-4"></div>

        <div className="col-md-4 card mt-5 p-5">
          <img
            className="img-fluid"
            src="https://syntecx.com/wp-content/uploads/2022/05/syntecx-logo-2.png"
            alt=""
          />
          <button type="button" className="btn btn-secondary mt-5 ">
            <Link className="signin " to="/Signin">
             User Login
            </Link>
          </button>
          <h3 className="text-center my-3 ">or</h3>
          <button type="button" class="btn btn-secondary">
            <Link className="signin" to="/signup">
              User SignUp
            </Link>
          </button>
        </div>

        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Home;
