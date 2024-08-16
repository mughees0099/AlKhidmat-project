import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
mongoose
  .connect("mongodb://localhost:27017/express-mongo")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
