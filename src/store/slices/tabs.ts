import { createSlice } from "@reduxjs/toolkit";

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

export default tabs;
