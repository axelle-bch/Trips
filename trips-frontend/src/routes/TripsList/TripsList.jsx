import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useState} from "react";
import {useGetAllTrips} from "../../api/hooks/useGetAllTrips";
import {TripsCard} from "../../components/TripCard/TripCard";
import {TripsGrid} from "../../components/TripsGrid/TripsGrid";

export const TripsList = () => {

    const [getResult, setGetResult] = useState(null);

    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    const { data, isLoading: isLoadingTrips, refetch: getData} = useGetAllTrips();

    console.log({data});

    return <>
        <Typography variant={"h3"}>Trips List</Typography>

            {isLoadingTrips
                ? <CircularProgress />
                : <TripsGrid trips={data.data}/>
            }

    </>


}
