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

// Create a client
const queryClient = new QueryClient()

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
