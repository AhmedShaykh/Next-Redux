"use client";
import React, { useState } from "react";

const Login = () => {

    const [username, setUserName] = useState("");

    const onClickLogIn = () => { };

    const onClickLogToggle = () => { };

    const onClickLogOut = () => { };

    return (
        <div>
            <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
            />
            <br />
            <br />
            <div>
                <button>Log In</button>
                <button>Log Out</button>
            </div>
        </div>
    )
};

export default Login;