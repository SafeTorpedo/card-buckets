import { createSlice } from "@reduxjs/toolkit";

const slice1 = createSlice({
    name: "1",
    initialState: [],
    reducers: {
        add1: (state, action) => {
            state.push(action.payload);
        },
        remove1: (state, action) => {
            const index = state.findIndex(
                (item) => item.name === action.payload
            );
            state.splice(index, 1);
        },
    },
});

export default slice1;
