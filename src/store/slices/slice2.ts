import { createSlice } from "@reduxjs/toolkit";

const slice2 = createSlice({
    name: "2",
    initialState: [],
    reducers: {
        add2: (state, action) => {
            state.push(action.payload);
        },
        remove2: (state, action) => {
            const index = state.findIndex(
                (item) => item.name === action.payload
            );
            state.splice(index, 1);
        },
    },
});

export default slice2;
