import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SkillDev() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/education/skill").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <a href="/education-program/skill/add">
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
