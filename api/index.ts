import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth";
import hotelsRouter from "./routes/auth";
import usersRouter from "./routes/auth";
import roomsRouter from "./routes/auth";

dotenv.config();
const app: express.Application = express();

const connect = async () => {
  if (process.env.MONGO) {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB");
    } catch (error) {
      throw error;
    }
  } else {
    console.error(
      "Missing MONGO environment variable. Please set it before running the application."
    );
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use("/api/auth/", authRouter);
app.use("/api/users/", usersRouter);
app.use("/api/hotels/", hotelsRouter);
app.use("/api/rooms/", roomsRouter);

app.listen(8800, () => {
  connect();
  console.log("Connected to Server");
});
