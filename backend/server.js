import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

app.listen(PORT, ()=> {
    console.log(`Server Running on ${PORT}`);
    connectDB();
});


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected with database!");
    } catch(err) {
        console.log("Failed to connect with db", err);
    }
}





// app.post("/test", async (req, res) => {
    
// });