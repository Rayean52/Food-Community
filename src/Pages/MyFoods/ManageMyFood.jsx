import React, { Suspense, use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import FoodsTable from './FoodsTable';
import Loading from '../../Components/Loader/Loading';

const myAddedFoodPromise = (email) => {
    return fetch(`https://food-share-server-5lo9nkaxg-abdullah-rayeans-projects.vercel.app/foods?email=${email}`,{
        credentials: 'include'
    }).then(res => res.json());
};


const ManageMyFood = () => {

    const { users } = use(AuthContext);
    const email = users.email;

    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <FoodsTable myAddedFoodPromise={myAddedFoodPromise(email)}></FoodsTable>
            </Suspense>
        </div>
    );
};

export default ManageMyFood;