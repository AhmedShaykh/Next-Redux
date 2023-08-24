"use client";
import React, { useRef } from "react";
import { store } from "../Redux/Store";
import { setStartupPokemon } from "@/Redux/features/searchSlice";
import { Pokemon } from "../../Types";

const Preloader = ({ pokemons }: { pokemons: Pokemon[] }) => {

    const loaded = useRef(false);

    if (!loaded.current) {

        store.dispatch(setStartupPokemon(pokemons));

        loaded.current = true;

    }

    return null;
};

export default Preloader;