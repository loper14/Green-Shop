import { createSlice } from "@reduxjs/toolkit";
import type { MainFlowerType } from "../../@types";

interface ShoppingType extends MainFlowerType {
  count: number;
}

interface StateType {
  data: ShoppingType[];
}
const initialState: StateType = {
  data: [],
};

const shoppingSlice = createSlice({
  name: "shoppingSlice",
  initialState,
  reducers: {
    setShoppingData(state, { payload }) {
      state.data = [...state.data, { ...payload, count: 1 }];
    },
    deleteProduct(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload);
    },
    incrementCountOfProduct(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload ? { ...value, count: value.count + 1 } : value,
      );
    },
    decrementCountOfProduct(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload ? { ...value, count: value.count - 1 } : value,
      );
    },
  },
});
export default shoppingSlice.reducer;
export const {
  setShoppingData,
  incrementCountOfProduct,
  decrementCountOfProduct,
  deleteProduct,
} = shoppingSlice.actions;
