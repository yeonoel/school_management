import mongoose from "mongoose";

const studentsSchema = mongoose.Schema({
  matricule: { type: String, required: true, unique: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  niveau: { type: String, required: true },
  moyenMath: { type: Number, required: true },
  moyenInfo: { type: Number, required: true },
});

const Students = mongoose.model('Students', studentsSchema);
export default Students;