import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from './firebase';

function Protected({ children }) {

  const isAuthenticated = auth.currentUser !== null; // Check if the user is authenticated

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected;