import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user";

const usersRouter: express.Router = express.Router();

// UPDATE
usersRouter.put("/:id", updateUser);

//DELETE
usersRouter.delete("/:id", deleteUser);

// GET
usersRouter.get("/:id", getUser);

// GET ALL
usersRouter.get("/", getUsers);

export default usersRouter;
