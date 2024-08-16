import React from "react";
import axios from "axios";
import { useState } from "react";

export default function SchoolForm() {
  const [data, setData] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const address = e.target.address.value;
    const budget = e.target.budget.value;
    console.log(title, address, budget);
    axios
      .post("http://localhost:5000/education/school", {
        title,
        address,
        budget,
      })
      .then((res) => {
        setData(res.data);
        window.location.href = "/education-program/schools/add";
      });
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
        <br />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" required />
        <br />
        <label htmlFor="budget">Budget</label>
        <input type="number" name="budget" id="budget" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
