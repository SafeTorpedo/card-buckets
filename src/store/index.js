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
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

const slice1 = createSlice({
    name: "1",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

const slice2 = createSlice({
    name: "2",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

const slice3 = createSlice({
    name: "3",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
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
