import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      // Redirect to dashboard or home
    } catch (err) {
      alert("Login failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
