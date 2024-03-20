import express, { NextFunction } from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room";
import { verifyAdmin } from "../utils/verityToken";

const roomsRouter: express.Router = express.Router();

// CREATE
roomsRouter.post("/", verifyAdmin, createRoom);

// UPDATE
roomsRouter.put("/:id", verifyAdmin, updateRoom);

//DELETE
roomsRouter.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

// GET
roomsRouter.get("/:id", getRoom);

// GET ALL
roomsRouter.get("/", getRooms);
export default roomsRouter;
