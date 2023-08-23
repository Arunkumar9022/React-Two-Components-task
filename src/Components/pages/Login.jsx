import React, { useState } from "react";
import AuthService from "./AuthService";
import "../../App.css";
import sweetAlert from "sweet-alert";


const LoginComponent = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAuthenticated = await AuthService.login(userId, password);

    if (isAuthenticated) {
      alert("Login Successful");
      // sweetAlert("login successfull");
    } else {
      alert("Login Failed");
      // sweetAlert("login failed");
    }
  };

  return (
    <div className="container bg-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="my-form">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-2 mb-3">
                <label className="mb-2">User ID:</label>
                <input
                  type="text"
                  id="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg- col-md-6 col-sm-2 mb-3">
                <label className="mb-2">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-5 py-2 rounded-2 btn btn-warning"
              >
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginComponent;
