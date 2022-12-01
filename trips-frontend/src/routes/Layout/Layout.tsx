import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools";

// Create a client
const queryClient = new QueryClient()

export const Layout = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <Navbar></Navbar>
                <Outlet />
            </QueryClientProvider>
        </>
    )
}