import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Skilldev from "./Schema/EducationProgram/skilldev.js";
import Schools from "./Schema/EducationProgram/schools.js";
import Hostels from "./Schema/EducationProgram/hostels.js";
import ScholarShip from "./Schema/EducationProgram/scholarship.js";
import ChildProtection from "./Schema/EducationProgram/childProtection.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
const PORT = 5000;
const db = process.env.MONGODB_URI;
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Error in connection", err);
  });

app.get("/", (req, res) => {
  res.send("Home");
});
// Skill
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

// School
app.get("/education/school", async (req, res) => {
  const schools = await Schools.find();
  res.json(schools);
});

app.post("/education/school", async (req, res) => {
  console.log(req.body);
  const { title, address, budget } = req.body;

  const school = new Schools({
    title,
    address,
    budget,
  });
  await school.save();
  res.json(school);
});

// Hostel
app.get("/education/hostel", async (req, res) => {
  const hostels = await Hostels.find();
  res.json(hostels);
});

app.post("/education/hostel", async (req, res) => {
  console.log(req.body);
  const { title, address, budget } = req.body;

  const hostel = new Hostels({
    title,
    address,
    budget,
  });
  await hostel.save();
  res.json(hostel);
});

// Scholarship
app.get("/education/scholarship", async (req, res) => {
  const scholarships = await ScholarShip.find();
  res.json(scholarships);
});

app.post("/education/scholarship", async (req, res) => {
  console.log(req.body);
  const { title, address, budget } = req.body;

  const scholarship = new ScholarShip({
    title,
    address,
    budget,
  });
  await scholarship.save();
  res.json(scholarship);
});

// Child Protection
app.get("/education/childProtection", async (req, res) => {
  const childProtections = await ChildProtection.find();
  res.json(childProtections);
});

app.post("/education/childProtection", async (req, res) => {
  console.log(req.body);
  const { title, address, budget } = req.body;

  const childProtection = new ChildProtection({
    title,
    address,
    budget,
  });
  await childProtection.save();
  res.json(childProtection);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
