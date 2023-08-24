import React from "react";
import Login from "@/Components/Login";

const Home = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <Login />

            <h1>Username: { }</h1>
        </div>
    )
};

export default Home;