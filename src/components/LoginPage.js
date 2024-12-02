import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin"); // Default role is "admin"
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password.");
      return;
    }

    // Store role in localStorage and redirect
    localStorage.setItem("role", role);
    localStorage.setItem("username", username);

    navigate(`/${role}-dashboard`);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="role-selection">
          <label>
            <input
              type="radio"
              value="admin"
              checked={role === "admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              value="editor"
              checked={role === "editor"}
              onChange={(e) => setRole(e.target.value)}
            />
            Editor
          </label>
          <label>
            <input
              type="radio"
              value="viewer"
              checked={role === "viewer"}
              onChange={(e) => setRole(e.target.value)}
            />
            Viewer
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginPage;
