import { createSlice } from "@reduxjs/toolkit";

interface ModalWithLoadingtype {
  loading: boolean;
  open: boolean;
}

interface ModalSliceType {
  siteMapModalVisibility: boolean;
  authModalVisibility: ModalWithLoadingtype;
  inProcessModalVisibility: boolean;
}

const initialState: ModalSliceType = {
  siteMapModalVisibility: false,
  authModalVisibility: {
    loading: false,
    open: false,
  },
  inProcessModalVisibility: false,
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
    setInProcessModalVisibility(state) {
      state.inProcessModalVisibility = !state.inProcessModalVisibility;
    },
  },
});
export const {
  setSiteMapModalVisibility,
  setAuthModalVisibility,
  setInProcessModalVisibility,
} = modalSlice.actions;
export default modalSlice.reducer;
