import { PayloadAction, createSlice, isAction } from "@reduxjs/toolkit";
import { IUserDto } from "../../types/types";

const initialState: IUserDto = {
    id: 0,
    login: "",
    isActive: false,
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUserDto>) => {
            state = action.payload;
        },
        removeUser: (state, action: PayloadAction<IUserDto>) => {
            state = initialState;
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
