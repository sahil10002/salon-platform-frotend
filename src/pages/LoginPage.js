import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login/`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful!");
    } catch (error) {
      setMessage("Login failed.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default LoginPage;
