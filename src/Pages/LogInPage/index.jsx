import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["username"]);

  const navigate = useNavigate()

  const handleSignIn = (event) => {
    event.preventDefault(); 

    const defaultUsername = "admin";
    const defaultPassword = "password123";

    if (username === defaultUsername && password === defaultPassword) {
      console.log("Successfully logged in");
      setError("");
      navigate('/dashboard')
      setCookie("username" ,username, { path: "/" });

    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="log-page-container">
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
