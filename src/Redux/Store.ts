import searchReducer from "./features/searchSlice";
import { pokemonApi } from "./features/pokemonApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        pokemonApi: pokemonApi.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(pokemonApi.middleware);
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;