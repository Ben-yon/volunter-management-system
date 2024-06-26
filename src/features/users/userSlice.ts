/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserById } from "./userActions";


const initialState = {
    loading: false,
    error: null,
    success: false,
    userInfo: {}
}


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending, (state) => {
            state.error = null;
            state.loading = true;
            state.success = false
        })
        .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<any>) => {
            state.error = null;
            state.loading = false;
            state.success = true;
            state.userInfo = action.payload;
        })
        .addCase(fetchUserById.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        })
    }
})

export default userSlice.reducer;