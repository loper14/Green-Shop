import { createSlice } from "@reduxjs/toolkit";

interface ModalSliceType {
  siteMapModalVisibility: boolean;
  registerModalVisibility: boolean;
}

const initialState: ModalSliceType = {
  siteMapModalVisibility: false,
  registerModalVisibility: false,
};
const modalSlice = createSlice({
  name: "modalSlicer",
  initialState,
  reducers: {
    setSiteMapModalVisibility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
    setRegisterModalVisibility(state) {
      state.registerModalVisibility = !state.registerModalVisibility;
    },
  },
});
export const { setSiteMapModalVisibility, setRegisterModalVisibility } =
  modalSlice.actions;
export default modalSlice.reducer;
