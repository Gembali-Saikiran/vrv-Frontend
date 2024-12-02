// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roleRequired }) => {
  const userRole = localStorage.getItem("role");

  if (!userRole || userRole !== roleRequired) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
