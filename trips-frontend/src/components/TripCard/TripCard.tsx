import {Trip} from "../../api/apiInterfaces";
import {Button, Card, Typography} from "@mui/material";

interface Props {
    trip: Trip
}

export const TripsCard = (props: Props) => {
    // destructuring the object
    const {destination, duration, durationUnit, minAttendants, maxAttendants} = props.trip;

    return <>
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <Typography variant={"body1"}>{destination}</Typography>
            <Typography variant={"body1"}>{duration} {durationUnit}</Typography>
            <Typography variant={"body1"}>{minAttendants} to {maxAttendants} travelers</Typography>
            <Button>Apply</Button>
        </Card>
    </>
}