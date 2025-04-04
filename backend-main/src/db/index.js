import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const MONGO_URI = process.env.MONGODB_URI;
const connectDB = async ()=>{
    try {
        console.log(MONGO_URI);
        const connection =  await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connection.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:"+error);
        process.exit(1);
    }
}

export default connectDB