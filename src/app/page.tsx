import React from "react";
import PokemonTable from "@/Components/PokemonTable";

const Home = async () => {

    const req = await fetch("http://localhost:3000/api/search");

    const data = await req.json();

    return (
        <div className="flex justify-center my-8">
            <PokemonTable pokemons={data} />
        </div>
    )
};

export default Home;