import mongoose from "mongoose";

export const mongoConnect = async () => {
    await mongoose.connect(process.env.MONGO_URL!).then(() => console.log("DB connected"));
}