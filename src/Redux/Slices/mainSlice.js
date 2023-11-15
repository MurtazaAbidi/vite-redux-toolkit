import { createSlice } from "@reduxjs/toolkit";


export const dataInfoSlice = createSlice({
  name: "dataInfo",
  initialState: 0,
  reducers: {
    setDataInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDataInfo } = dataInfoSlice.actions;