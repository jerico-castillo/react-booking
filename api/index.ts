import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello first request!");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to Server");
});
