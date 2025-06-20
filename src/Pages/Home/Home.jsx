import React, { useRef } from 'react';
import Banner from './Banner';
import FeaturedFoods from './FeaturedFoods';
import PaidFoods from './PaidFoods';
import States from './States';

const Home = () => {

    const bottomRef = useRef(null);

    return (
        <div>
            <Banner bottomRef={bottomRef}></Banner>
            <FeaturedFoods></FeaturedFoods>
            <PaidFoods bottomRef={bottomRef}></PaidFoods>
            <States></States>
        </div>
    );
};

export default Home;