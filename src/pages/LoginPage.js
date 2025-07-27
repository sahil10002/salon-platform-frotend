import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/login/`, {
        email,
        password,
      });
      alert("Login successful!");
      console.log(res.data); // You can store token here
    } catch (err) {
      alert("Login failed!");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
