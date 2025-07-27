import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    api.get("/partners")
      .then(res => setPartners(res.data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div>
      <h1>Salon Partners</h1>
      <ul>
        {partners.map(partner => (
          <li key={partner._id}>{partner.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
