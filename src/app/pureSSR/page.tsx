import React from "react";
import SSRPokemonTable from "@/Components/SSRPokemonTable";
import { setStartupPokemon } from "@/Redux/features/searchSlice";
import { store } from "@/Redux/Store";

const PureSSR = async () => {

    const req = await fetch("http://localhost:3000/api/search");

    const data = await req.json();

    store.dispatch(setStartupPokemon(data));

    return (
        <div className="flex justify-center my-8">
            <SSRPokemonTable />
        </div>
    )
};

export default PureSSR;