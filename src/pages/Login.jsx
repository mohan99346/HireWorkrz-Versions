import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Register from "./Register";

function Login({ Close }) {
  const [Regopen, setRegopen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const toggleRoleOptions = () => {
    setShowRoleOptions(!showRoleOptions);
  };

  const selectRole = (role) => {
    setSelectedRole(role);
    setShowRoleOptions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        if (result.data === "Success") {
          navigate("/home");
        } else {
          alert("The password is incorrect");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="close-button" onClick={() => Close(false)}>&times;</div>
        <h2 className="login-title">Sign In to HireWorkrz</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your Username or Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        <div className="form-group Rolechooser">
  <button type="button" className="role-button" onClick={toggleRoleOptions}>
    {selectedRole ? `Role: ${selectedRole}` : "🔽 Select Role"}
  </button>

  {showRoleOptions && (
    <div className="role-options">
      <button
        type="button"
        className={`role-option ${selectedRole === "Freelancer" ? "selected" : ""}`}
        onClick={() => selectRole("Freelancer")}
      >
        🧑‍💻 Freelancer
      </button>
      <button
        type="button"
        className={`role-option ${selectedRole === "Client" ? "selected" : ""}`}
        onClick={() => selectRole("Client")}
      >
        💼 Client
      </button>
    </div>
  )}
</div>


          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="Sign-upblock">
          <p className="signup-text">
            New to HireWorkrz?{" "}
            <button onClick={() => setRegopen(true)} className="signup-link">
              Join now
            </button>
            {Regopen && <Register regClose={setRegopen} />}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
