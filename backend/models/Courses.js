import mongoose from "mongoose";

const coursesSchema = mongoose.Schema({
  niveau: { type: String, required: true },
  comment: { type: String, required: true },
  speciality: { type: String, required: true },
  salle: { type: Number, required: true },
});

const Courses = mongoose.model('Courses', coursesSchema);

export default Courses;