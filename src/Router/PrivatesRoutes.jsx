import React, { use } from 'react';
import { Navigate, useLocation} from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Components/Loader/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {loading, users} = use(AuthContext);

    if(loading){
        return <Loading></Loading>;
    }

    if(!users){
       return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;