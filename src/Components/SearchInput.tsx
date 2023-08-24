"use client";
import React, { useEffect } from "react";
import PokemonTable from "./PokemonTable";
import { pokemonApi } from "@/Redux/features/pokemonApi";
import { RootState, AppDispatch } from "@/Redux/Store";
import { setSearch } from "@/Redux/features/searchSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Pokemon } from "Types";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {

    const dispatch = useAppDispatch();

    const search = useAppSelector((state) => state.search.search);

    const startupPokemon = useAppSelector((state) => state.search.startupPokemon);

    const data = useAppSelector(
        (state) =>
            state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[]
    );

    useEffect(() => {

        dispatch(pokemonApi.endpoints.search.initiate(search));

    }, [dispatch, search]);

    return (
        <div>
            <input
                className="text-black font-semibold w-60 p-2 my-4"
                type="text"
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />

            <PokemonTable pokemons={search.length ? data ?? [] : startupPokemon} />
        </div>
    )
};

export default SearchInput;