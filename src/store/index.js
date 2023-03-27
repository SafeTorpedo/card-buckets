import { configureStore, createSlice } from "@reduxjs/toolkit";

const tabs = createSlice({
    name: "tabs",
    initialState: ["Entertainment", "Education", "Work", "Other"],
    reducers: {
        rename: (state, action) => {
            //update the tabs array as a whole
            return [...action.payload];
        },
    },
});

const slice0 = createSlice({
    name: "0",
    initialState: [],
    reducers: {
        add0: (state, action) => {
            state.push(action.payload);
        },
        remove0: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

const slice1 = createSlice({
    name: "1",
    initialState: [],
    reducers: {
        add1: (state, action) => {
            state.push(action.payload);
        },
        remove1: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

const slice2 = createSlice({
    name: "2",
    initialState: [],
    reducers: {
        add2: (state, action) => {
            state.push(action.payload);
        },
        remove2: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

const slice3 = createSlice({
    name: "3",
    initialState: [],
    reducers: {
        add3: (state, action) => {
            state.push(action.payload);
        },
        remove3: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

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
