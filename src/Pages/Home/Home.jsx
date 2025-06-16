import React from 'react';
import Banner from './Banner';
import FeaturedFoods from './FeaturedFoods';
import PaidFoods from './PaidFoods';
import States from './States';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <PaidFoods></PaidFoods>
            <States></States>
        </div>
    );
};

export default Home;