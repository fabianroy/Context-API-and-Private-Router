import { useContext } from 'react';
import { AuthContext } from './../providers/AuthProvider';
import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return (
            <div className='w-fit mx-auto mt-10'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}