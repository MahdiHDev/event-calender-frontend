import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
import authReducer from "./features/authSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "cart"], // reducers you want to persist
};

const rootReducer = combineReducers({
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

// optional but recommended
export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = store.dispatch;
