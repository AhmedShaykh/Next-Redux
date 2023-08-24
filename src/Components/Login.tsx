"use client";
import React, { useState } from "react";
import { logIn, logOut } from "@/Redux/features/authSlice";
import { AppDispatch } from "@/Redux/Store";
import { useDispatch } from "react-redux";

const Login = () => {

    const [username, setUserName] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const onClickLogIn = () => {
        dispatch(logIn(username));
    };

    const onClickLogToggle = () => {



    };

    const onClickLogOut = () => {



    };

    return (
        <div>
            <input
                className="w-90 p-3 text-black"
                onChange={(e) => setUserName(e.target.value)}
                type="text"
            />
            <br />
            <br />
            <div className="flex justify-between my-2">
                <button
                    className="p-2 bg-white text-black font-semibold cursor-pointer rounded-md"
                    onClick={onClickLogIn}
                >
                    Log In
                </button>

                <button
                    className="p-2 bg-white text-black font-semibold cursor-pointer rounded-md"
                    onClick={onClickLogOut}
                >
                    Log Out
                </button>
            </div>
        </div>
    )
};

export default Login;