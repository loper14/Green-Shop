import { createSlice } from "@reduxjs/toolkit";

interface flowerSliceType {
  categoryName: string;
}

const initialState: flowerSliceType = {
  categoryName: "house-plants",
};
const flowerSlice = createSlice({
  name: "flowerSlice",
  initialState,
  reducers: {
    setCategoryName(state, action) {
      state.categoryName = action.payload;
      console.log("Working", action.payload);
    },
  },
});
export const { setCategoryName } = flowerSlice.actions;
export default flowerSlice.reducer;
