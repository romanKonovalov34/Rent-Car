import { LS_AUTH_KEY } from "../constants/accessToken";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const location = useLocation()  
  const token = localStorage.getItem(LS_AUTH_KEY);

    return token
    ? <Outlet />
    : <Navigate to='/login' replace state={{from: location}}/>
};

export default PrivateRoutes;
