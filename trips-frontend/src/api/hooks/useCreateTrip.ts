import {useMutation, useQuery} from "react-query";
import apiClient from "../../http-common";
import {Trip} from "../apiInterfaces";

export const useCreateTrip = (trip: Trip) => {
    return useMutation(
        "create-trip",
        async () => {
            return await apiClient.post("/trips", trip);
        },
        {
            onError: (err) => {
                console.error(err);
            },
        }
    )
}