import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Range {
  startDate: string;
  endDate: string;
  key: string;
}

// interface Range {
//   startDate: Date | undefined;
//   endDate: Date | undefined;
//   key: string;
// }

type SliceState = {
  destination?: string;
  dates: Range[];
  options: {
    adult?: number;
    children?: number;
    room: number;
  };
};

const initialState: SliceState = {
  destination: undefined,
  dates: [
    {
      startDate: "",
      endDate: "",
      key: "selection",
    },
  ],
  options: {
    adult: undefined,
    children: undefined,
    room: 1,
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action: PayloadAction<SliceState>) {
      const { destination, dates, options } = action.payload; // 아직 뭐가 들어올지 모르기에 미정
      state.destination = destination;
      state.dates = dates;
      state.options = options;
    },
    resetSearch(state) {
      state.destination = undefined;
      state.dates = [];
      state.options = {
        adult: undefined,
        children: undefined,
        room: 1,
      };
    },
  },
});

export const { search, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
