import {Trip} from "../../api/apiInterfaces";
import {Box, Button, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

interface Props {
    trip: Trip
}

export const TripsCard = (props: Props) => {
    // destructuring the object
    const {destination, minTravelersNumber, maxTravelersNumber} = props.trip;
    const currentTravelersNumber =  Math.floor(Math.random() * maxTravelersNumber + 1);

    return <>
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardHeader
                title={destination}
                subheader="Destination country"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://picsum.photos/200/300"
                alt="Paella dish"
            />
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex'}}>
                        <PersonIcon/>
                        <Typography variant={"body2"}>{minTravelersNumber} to {maxTravelersNumber} travelers</Typography>
                    </Box>
                    <Box>
                        <Typography variant={"body2"}>(Currently {currentTravelersNumber}) </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        Date of the trip here
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        A short description of the trip here
                    </Typography>
                </Box>
            </CardContent>
            <Button>Apply</Button>
        </Card>
    </>
}