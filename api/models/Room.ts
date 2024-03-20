import { Schema, model, Types } from "mongoose";

interface IRoom {
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: {
    number: number;
    unavailableDates: Date[];
  }[];
}

const roomSchema = new Schema<IRoom>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    maxPeople: { type: Number, required: true },
    desc: { type: String, required: true },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  {
    timestamps: true,
  }
);

const Room = model<IRoom>("Room", roomSchema);

export default Room;
