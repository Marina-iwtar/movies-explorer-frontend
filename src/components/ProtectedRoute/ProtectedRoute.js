import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, element: Component, ...props }) {
  return loggedIn ? <Component {...props} /> : <Navigate to="/" replace />;
}
export default ProtectedRoute;
