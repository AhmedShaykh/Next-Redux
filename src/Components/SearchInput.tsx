"use client";
import React from "react";
import PokemonTable from "./PokemonTable";
import { RootState, AppDispatch } from "@/Redux/Store";
import { setSearch } from "@/Redux/features/searchSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {

    const dispatch = useAppDispatch();

    const search = useAppSelector((state) => state.search.search);

    const startupPokemon = useAppSelector((state) => state.search.startupPokemon);

    return (
        <div>
            <input
                className="text-black font-semibold w-60 p-2 my-4"
                type="text"
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />

            <PokemonTable pokemons={startupPokemon} />
        </div>
    )
};

export default SearchInput;