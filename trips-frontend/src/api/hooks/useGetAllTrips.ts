import {useQuery} from "react-query";
import apiClient from "../../http-common";

export const useGetAllTrips = () => {
    return useQuery(
        "get-all-trips",
        async () => {
            return await apiClient.get("/trips");
        },
        {
            onError: (err) => {
                console.error(err);
            },
        }
    )
}