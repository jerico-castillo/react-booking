import express, { NextFunction } from "express";
import Hotel from "../models/Hotel";
import { createError } from "../utils/error";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel";

const hotelsRouter: express.Router = express.Router();

// CREATE
hotelsRouter.post("/", createHotel);

// UPDATE
hotelsRouter.put("/:id", updateHotel);

//DELETE
hotelsRouter.delete("/:id", deleteHotel);

// GET
hotelsRouter.get("/:id", getHotel);

// GET ALL
hotelsRouter.get("/", getHotels);
export default hotelsRouter;
