import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {Container} from "@mui/material";


export const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Container maxWidth="md">
                <Outlet />
            </Container>
        </>
    )
}