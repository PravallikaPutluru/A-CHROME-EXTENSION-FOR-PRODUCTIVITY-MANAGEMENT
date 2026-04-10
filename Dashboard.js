import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/report/123")
      .then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Daily Report</h2>
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            {item.site} - {(item.timeSpent / 1000).toFixed(2)} sec
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
