import {Outlet} from "react-router-dom";
import {Box, Container} from "@mui/material";
import Navbar from "../components/Navbar/Navbar";


export const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Container maxWidth="md" sx={{mt: 10}}>
                <Box>
                    <Outlet />
                </Box>
            </Container>
        </>
    )
}