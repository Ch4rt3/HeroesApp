
import { Navigate } from "react-router";
import { AuthContext } from "../auth"
import { useContext } from "react";



export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

  return (!logged)
    ? children
    : <Navigate to="/marvel" />
}
