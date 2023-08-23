import React from 'react';
import Counter from '@/Redux/Counter';

const Home = () => {
    return (
        <div className="flex flex-col items-center my-4">
            <h1 className="text-4xl font-bold">
                Counter App
            </h1>
            <Counter />
        </div>
    )
};

export default Home;