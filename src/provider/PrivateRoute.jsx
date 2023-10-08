import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // const navigate = useNavigate()

    if (loading) {
        return <div>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>


};

export default PrivateRoute;