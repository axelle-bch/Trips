import {CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useState} from "react";
import {useGetAllTrips} from "../../api/hooks/useGetAllTrips";
import {TripsCard} from "../../components/TripCard/TripCard";

export const TripsList = () => {

    const [getResult, setGetResult] = useState(null);

    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    const { data, isLoading: isLoadingTrips, refetch: getData} = useGetAllTrips();

    console.log({data});

    return <>
        <Typography variant={"h2"}>Trips List</Typography>
        {isLoadingTrips
            ? <CircularProgress />
            : <Grid container spacing={2}>
                {data.data.map((trip, index) => (
                    <Grid item xs={4}>
                        <TripsCard trip={trip} />
                    </Grid>
                ))}
            </Grid>
        }
    </>


}
