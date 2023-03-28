import { createSlice } from "@reduxjs/toolkit";

const slice3 = createSlice({
    name: "3",
    initialState: [],
    reducers: {
        add3: (state, action) => {
            state.push(action.payload);
        },
        remove3: (state, action) => {
            const index = state.findIndex(
                (item) => item.name === action.payload
            );
            state.splice(index, 1);
        },
    },
});

export default slice3;
