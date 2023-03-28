import { createSlice } from "@reduxjs/toolkit";

const slice0 = createSlice({
    name: "0",
    initialState: [],
    reducers: {
        add0: (state, action) => {
            state.push(action.payload);
        },
        remove0: (state, action) => {
            const index = state.findIndex(
                (item) => item.name === action.payload
            );
            state.splice(index, 1);
        },
    },
});

export default slice0;
