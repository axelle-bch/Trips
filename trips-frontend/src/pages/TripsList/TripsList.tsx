import {TripsCard} from "../../components/TripCard/TripCard";
import {Container, Grid} from "@mui/material";
import {useState} from "react";
import {mockTripsData} from "./mockData";

export const TripsList = () => {

    const [trips, setTrips] = useState(mockTripsData);

    return <>
        <Container maxWidth="md">
            <h1>Trips List</h1>
            <Grid container>
                {mockTripsData.map((trip, index) => (
                    <Grid item xs={3}>
                        <TripsCard trip={trip} />
                    </Grid>
                ))}
            </Grid>

        </Container>
    </>
}
