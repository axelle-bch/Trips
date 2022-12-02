import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./routes/Layout/Layout";
import {TripsList} from "./routes/TripsList/TripsList";
import {CreateTrip} from "./routes/CreateTrip/CreateTrip";
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools";
import {createTheme, ThemeProvider} from "@mui/material";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "trips",
                element: <TripsList />,
            },
            {
                path: "create",
                element: <CreateTrip />,
            },
        ],
    },
]);

// Create a query client
const queryClient = new QueryClient();

// Configure Theme
const theme = createTheme();
theme.spacing(2); // `${8 * 2}px` = '16px'


const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
