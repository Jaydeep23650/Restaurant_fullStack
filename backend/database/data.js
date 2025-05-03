import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

export const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ Error connecting to MongoDB", err);
        process.exit(1); // exit on DB error
    }
};
