import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, redirectTo}) => { 
  const currentUser = useSelector((state) => state.user.user?.user?.username);
  return currentUser ? ( children ): ( <Navigate to={redirectTo}/> )
}

export default ProtectedRoute


