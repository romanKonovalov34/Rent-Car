import { initialDictionarySlice } from "@/constants/initDictionarySlice";
import { IDictionaryDto } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const dictionarySlice = createSlice({
    name: "userSlice",
    initialState: initialDictionarySlice,
    reducers: {
        addAutoCategory: (state, action: PayloadAction<IDictionaryDto[]>) => {
            state.autoCategories = action.payload;
        },
        addModels: (state, action: PayloadAction<IDictionaryDto[]>) => {
            state.models = action.payload;
        },
        addCities: (state, action: PayloadAction<IDictionaryDto[]>) => {
            state.cities = action.payload;
        },
        addStatuses: (state, action: PayloadAction<IDictionaryDto[]>) => {
            state.statuses = action.payload;
        },
    },
});

export const dictionaryActions = dictionarySlice.actions;
export const dictionaryReducer = dictionarySlice.reducer;
