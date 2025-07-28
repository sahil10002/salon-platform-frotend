import React, { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "customer" });

  const register = async () => {
    await axios.post("http://localhost:3000/api/auth/register", form);
    alert("Registered");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="customer">Customer</option>
        <option value="partner">Partner</option>
      </select>
      <button onClick={register}>Register</button>
    </div>
  );
}
