import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Skilldev from "./Schema/EducationProgram/skilldev.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
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
  res.send("Home");
});
app.get("/education/skill", async (req, res) => {
  const skills = await Skilldev.find();
  res.json(skills);
});
app.post("/education/skill", async (req, res) => {
  console.log(req.body);
  const { title, address, budget } = req.body;

  const skill = new Skilldev({
    title,
    address,
    budget,
  });
  await skill.save();
  res.json(skill);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
