import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Hostels() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/education/hostel").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <a href="/education-program/hostel/add">
        <button>Add</button>
      </a>
      {data.map((item) => (
        <div key={item._id}>
          <h1>{item.title}</h1>
          <p>{item.address}</p>
          <p>{item.budget}</p>
        </div>
      ))}
    </div>
  );
}
