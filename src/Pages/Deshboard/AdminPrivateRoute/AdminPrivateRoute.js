import React from 'react';
import {  Navigate, Outlet,useLocation} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from './../../Shared/Firebase/useAuth';


const AdminPrivateRoute = () => {
    let { isLoading, admin} = useAuth();
    const location = useLocation();
    if(isLoading){return <CircularProgress />}
    
    return admin ? <Outlet/> : (
        <Navigate to="/" replace state={{from: location}} />
    )
};

export default AdminPrivateRoute;