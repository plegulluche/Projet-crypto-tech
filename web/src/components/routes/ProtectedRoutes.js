import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({auth}) => {
    
    return (localStorage.getItem("logged") === "true" ? <Outlet /> : <Navigate to="/login" replace/>)
}
export default ProtectedRoutes;