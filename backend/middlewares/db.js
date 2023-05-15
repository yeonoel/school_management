import mongoose from "mongoose";
//import { pwd } from "../utiles/pwd";

export async function db() {
    mongoose.connect('mongodb://127.0.0.1:27017/schoolManagement')
    .then(() => console.log("The connection with mongoose is successfull"))
    .catch((error) => console.log('Failed connection with mongoose' + error.message));    
}