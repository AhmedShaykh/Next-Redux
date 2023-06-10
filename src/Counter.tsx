"use client";

const Counter = () => {
    return (
        <div className="my-8 flex gap-6 justify-center items-center">
            <button className="p-3 rounded-md bg-green-800 font-semibold text-white">
                Increment
            </button>

            <h3 className="font-bold text-white">
                Counter Value:
            </h3>

            <button className="p-3 rounded-md bg-red-800 font-semibold text-white">
                Decrement
            </button>

        </div>
    )
};

export default Counter;