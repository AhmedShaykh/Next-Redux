"use client";
import React, { useState } from 'react';
import { counterActions } from "./store/slice/CounterSlice";
import { RootState } from "./store/Store";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const count = useSelector(
        (state: RootState) => state.CounterSlice.value
    );

    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState<string>("2");

    const increment = () => {
        dispatch(counterActions.increment())
    };

    const decrement = () => {
        dispatch(counterActions.decrement())
    };

    const reset = () => {
        dispatch(counterActions.reset())
    };

    return (
        <div className="my-8 flex gap-y-6 gap-x-8 justify-center items-center">
            <button
                className="p-3 rounded-md bg-green-800 font-semibold text-white"
                onClick={increment}
            >
                Increment
            </button>

            <h3 className="text-2xl font-bold text-white">
                Counter Value: {count}
            </h3>

            <button
                className="p-3 rounded-md bg-red-800 font-semibold text-white"
                onClick={decrement}
            >
                Decrement
            </button>

            <div className="flex justify-between items-center gap-x-6">
                <input
                    type="text"
                    className="w-14 text-center items-center text-black h-11 outline-none font-bold"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />

                <button
                    className="p-3 rounded-md bg-blue-800 font-semibold text-white"
                    onClick={() => dispatch(counterActions.incrementByAmount(Number(incrementAmount) || 0))}
                >
                    Add Amount
                </button>
            </div>

            <button
                className="p-3 rounded-md bg-white font-semibold text-black"
                onClick={reset}
            >
                Reset
            </button>
        </div>
    )
};

export default Counter;