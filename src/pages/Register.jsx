import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";

function Register({ regClose }) {
  const [UserName, setUsername] = useState('');
  const[ConfirmPassword,setConfirmPassword] =useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const toggleRoleOptions = () => {
    setShowRoleOptions(!showRoleOptions);
  };

  const selectRole = (role) => {
    setSelectedRole(role);
    setShowRoleOptions(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // prevent reload
    setErrorMessage('');
    setSuccessMessage('');

    if (!selectedRole) {
      setErrorMessage("❗ Please select a role (Freelancer or Client)");
      return;
    }

    const apiUrl =
      selectedRole === "Freelancer"
        ? "http://localhost:8080/api/Freelancer"
        : "http://localhost:8080/api/Client/add";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password,ConfirmPassword,UserName, email }),
      });

      if (response.ok) {
        setSuccessMessage("✅ Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        const data = await response.json();
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      setErrorMessage(`❗ ${error.message}`);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="close-button" onClick={() => regClose(false)}>&times;</div>
        <h2 className="register-title">Join HireWorkrz</h2>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="input-field"
              value={UserName}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
            <div className="form-group">
            <label>ConfirmPassword</label>
            <input
              type="password"
              className="input-field"
              value={ConfirmPassword}
              onChange={(e) =>setConfirmPassword (e.target.value)}
              placeholder="Confirm password"
              required
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

          {/* ✅ Show Error/Success */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button type="submit" className="register-button">Sign Up</button>
        </form>

        <div className="sign-upblock">
          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login" className="login-link">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
