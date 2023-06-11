"use client";
import { counterActions } from "./store/slice/CounterSlice";
import { RootState } from "./store/Store";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const count = useSelector(
        (state: RootState) => state.CounterSlice.value
    );

    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment())
    };

    const decrement = () => {
        dispatch(counterActions.decrement())
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
        </div>
    )
};

export default Counter;