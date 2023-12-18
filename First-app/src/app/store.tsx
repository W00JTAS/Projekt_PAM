import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "../features/counter/counterSlice";
import PokemonSlice from "../features/pokemon/PokemonSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        pokemon: PokemonSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;