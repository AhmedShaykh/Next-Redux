import React from "react";
import { setStartupPokemon } from "@/Redux/features/searchSlice";
import { store } from "@/Redux/Store";

const Home = async () => {

    const req = await fetch("http://localhost:3000/api/search");

    const data = await req.json();

    store.dispatch(setStartupPokemon(data));

    return (
        <div className="flex justify-center my-8">
        </div>
    )
};

export default Home;