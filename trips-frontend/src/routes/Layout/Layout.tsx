import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";



export const Layout = () => {
    return (
        <>
                <Navbar></Navbar>
                <Outlet />
        </>
    )
}