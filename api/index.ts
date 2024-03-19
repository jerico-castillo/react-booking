import express, { NextFunction, application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth";
import hotelsRouter from "./routes/hotels";
import usersRouter from "./routes/users";
import roomsRouter from "./routes/rooms";
import cookieParser from "cookie-parser";

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

// middlewares

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  }
);

app.listen(8800, async () => {
  connect();
  console.log("Connected to Server");
});
