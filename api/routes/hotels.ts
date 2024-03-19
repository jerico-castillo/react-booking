import express, { NextFunction } from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel";
import { verifyAdmin } from "../utils/verityToken";

const hotelsRouter: express.Router = express.Router();

// CREATE
hotelsRouter.post("/", verifyAdmin, createHotel);

// UPDATE
hotelsRouter.put("/:id", verifyAdmin, updateHotel);

//DELETE
hotelsRouter.delete("/:id", verifyAdmin, deleteHotel);

// GET
hotelsRouter.get("/:id", getHotel);

// GET ALL
hotelsRouter.get("/", getHotels);
export default hotelsRouter;
