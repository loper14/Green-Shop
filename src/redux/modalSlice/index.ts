import { createSlice } from "@reduxjs/toolkit";

interface ModalWithLoadingtype {
  loading: boolean;
  open: boolean;
}

interface ModalSliceType {
  siteMapModalVisibility: boolean;
  authModalVisibility: ModalWithLoadingtype;
}

const initialState: ModalSliceType = {
  siteMapModalVisibility: false,
  authModalVisibility: {
    loading: false,
    open: false,
  },
};
const modalSlice = createSlice({
  name: "modalSlicer",
  initialState,
  reducers: {
    setSiteMapModalVisibility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
    setAuthModalVisibility(state, { payload }) {
      state.authModalVisibility = payload;
    },
  },
});
export const { setSiteMapModalVisibility, setAuthModalVisibility } =
  modalSlice.actions;
export default modalSlice.reducer;
