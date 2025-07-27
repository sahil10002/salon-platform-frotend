import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PartnerDashboard from "./pages/Partner/Dashboard";
import CustomerDashboard from "./pages/Customer/Dashboard";
import AdminDashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/partner">Partner Dashboard</Link> |{" "}
        <Link to="/customer">Customer Dashboard</Link> |{" "}
        <Link to="/admin">Admin Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/partner" element={<PartnerDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
