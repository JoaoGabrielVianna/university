import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar-component/Navbar";

export const PrivateRoutes = () => {
    const { signed } = useContext(AuthGoogleContext);
    return (
        signed ?
            <>
                <Outlet />
                <NavBar />
            </>
            : <Navigate to="/" />)
        
}