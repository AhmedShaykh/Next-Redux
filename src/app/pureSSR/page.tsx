import React from "react";
import SSRPokemonTable from "@/Components/SSRPokemonTable";
import { setStartupPokemon } from "@/Redux/features/searchSlice";
import { store } from "@/Redux/Store";
import Link from "next/link";

const PureSSR = async () => {

    const req = await fetch("http://localhost:3000/api/search");

    const data = await req.json();

    store.dispatch(setStartupPokemon(data));

    return (
        <div className="flex flex-col items-center my-8">
            <SSRPokemonTable />

            <div className="flex justify-center my-6">
                <Link href="/" className="text-blue-600 text-lg cursor-pointer hover:text-blue-800">
                    Go Back
                </Link>
            </div>
        </div>
    )
};

export default PureSSR;