import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import flowerSlice from "./flowerSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    flw: flowerSlice,
  },
});
export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
