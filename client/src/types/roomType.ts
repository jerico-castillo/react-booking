export type Room = {
  _id: string;
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: { number: number; unavailableDates: Date[]; _id: string }[];
};
