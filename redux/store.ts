import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { userApi } from "./services/userApi";
import { userReducer } from "./reducers/userSlice";
import { proposalApi } from "./services/proposalApi";
import { proposalReducer } from "./reducers/proposalSlice";
import { dictionaryApi } from "./services/dictionaryApi";
import { dictionaryReducer } from "./reducers/dictionarySlice";

export const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [proposalApi.reducerPath]: proposalApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    user: userReducer,
    proposal: proposalReducer,
    dictionary: dictionaryReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            proposalApi.middleware,
            dictionaryApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

