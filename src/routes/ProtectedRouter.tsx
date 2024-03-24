import { ReactNode } from "react";

import { Navigate } from "react-router-dom";

import { selectCurrentToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(selectCurrentToken);
  console.log(token);
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
