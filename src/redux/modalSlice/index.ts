import { createSlice } from "@reduxjs/toolkit";

interface ModalSliceType {
  siteMapModalVisibility: boolean;
}

const initialState: ModalSliceType = {
  siteMapModalVisibility: false,
};
const modalSlice = createSlice({
  name: "modalSlicer",
  initialState,
  reducers: {
    setSiteMapModalVisibility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
  },
});
export const { setSiteMapModalVisibility } = modalSlice.actions;
export default modalSlice.reducer;
