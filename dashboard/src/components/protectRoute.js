import GeneralContext from "./GeneralContext";
import {useContext} from "react";
import { Navigate } from "react-router-dom";



function ProtectedRoute({ children }){
    const useAuth = useContext(GeneralContext);
    const {user, loading} = useAuth;

    if (loading) {
        return <p>Checking your session...</p>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export  default ProtectedRoute;