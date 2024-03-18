import express from "express";
import { login, register } from "../controllers/auth";

const authRouter: express.Router = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
