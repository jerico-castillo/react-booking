import { Schema, model, Types } from "mongoose";

interface Rooms {
  _id: Types.ObjectId;
}

interface IHotel {
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos?: Types.Array<string>;
  title: string;
  desc: string;
  rating?: number;
  rooms?: Types.DocumentArray<Rooms>;
  cheapestPirce: number;
  featured: boolean;
}

const hotelSchema = new Schema<IHotel>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  distance: { type: String, required: true },
  photos: { type: [String] },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  rooms: { type: [String] },
  cheapestPirce: { type: Number, required: true },
  featured: { type: Boolean, default: false },
});

const Hotel = model<IHotel>("Hotel", hotelSchema);

export default Hotel;
