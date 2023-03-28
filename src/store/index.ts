import { configureStore } from "@reduxjs/toolkit";

import tabs from "./slices/tabs";
import slice0 from "./slices/slice0";
import slice1 from "./slices/slice1";
import slice2 from "./slices/slice2";
import slice3 from "./slices/slice3";

const store = configureStore({
    reducer: {
        tabs: tabs.reducer,
        0: slice0.reducer,
        1: slice1.reducer,
        2: slice2.reducer,
        3: slice3.reducer,
    },
});

export { store };
export const { rename } = tabs.actions;
export const { add0, remove0 } = slice0.actions;
export const { add1, remove1 } = slice1.actions;
export const { add2, remove2 } = slice2.actions;
export const { add3, remove3 } = slice3.actions;
