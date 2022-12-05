import {Grid} from "@mui/material";
import {TripsCard} from "../TripCard/TripCard";

/**
 * A dumb component that displays a grips of trips cards
 * @param props contains props.trips an array of Trips
 * @returns {JSX.Element}
 * @constructor
 */
export const TripsGrid = (props) => {
    const trips = props.trips;

    return (
        <Grid container spacing={2}>
            {trips.map((trip, index) => (
                <Grid item xs={4}>
                    <TripsCard trip={trip} />
                </Grid>
            ))}
        </Grid>
    );
}
