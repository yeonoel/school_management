import mongoose from "mongoose";
import uniqueValidator  from 'mongoose-unique-validator';

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

export default User;

