import { CircularProgress } from '@mui/material';
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const AdminRoute = ({children}) => {
    const {user, isLoading, admin} = useAuth();
    const location = useLocation();
    if(isLoading) {
        return <CircularProgress />
    }
  return (
    user.email && admin ? children :  <Navigate to="/" state={{ from: location }} replace />
  )
}

export default AdminRoute
