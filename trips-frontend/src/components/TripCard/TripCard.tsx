import {Trip} from "../../api/apiInterfaces";
import {Box, Button, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

interface Props {
    trip: Trip
}

export const TripsCard = (props: Props) => {
    // destructuring the object
    const {destination, minTravelersNumber, maxTravelersNumber} = props.trip;

    return <>
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardHeader
                title={destination}
                subheader="Created on: Trip creation date here"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://picsum.photos/200/300"
                alt="Paella dish"
            />
            <CardContent>
                <Box sx={{ display: 'inline-flex' }}>
                    <PersonIcon/>
                    <Typography variant={"body1"}>{minTravelersNumber} to {maxTravelersNumber} travelers</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    A short description of the trip here
                </Typography>
            </CardContent>
            <Button>Apply</Button>
        </Card>
    </>
}