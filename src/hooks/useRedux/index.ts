import type { RootStore, DispatchType } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useReduxDispatch = () => useDispatch<DispatchType>();
export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
