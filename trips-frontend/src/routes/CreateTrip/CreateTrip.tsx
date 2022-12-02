import {Box, Paper, TextField, Typography} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import {useState} from "react";
import {useCreateTrip} from "../../api/hooks/useCreateTrip";

/**
 * Component that creates a trip
 * Todo:
 * -Create the form
 * -Connect to the backend to create the trip
 * -Add form validation
 * -Style
 * @constructor
 */
export const CreateTrip = () => {

    const [destination, setDestination] = useState("");
    const [minTravelersNumber, setMinTravelersNumber] = useState(0);
    const [maxTravelersNumber, setMaxTravelersNumber] = useState(0);

    const {isLoading: isPostingTrip, isSuccess, isError, data, error, mutate: postTrip} = useCreateTrip({
        destination: destination,
        minTravelersNumber: minTravelersNumber,
        maxTravelersNumber: maxTravelersNumber
    });

    const handleSubmit = () => {
        postTrip();
    };

    return (
        <>
            <Typography variant={"h2"}>Create a trip</Typography>
            <Paper>
                <form
                    onSubmit={handleSubmit}
                >
                    <Box>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="destination"
                            label="Destination"
                            autoFocus
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Box sx={{ typography: 'subtitle2' }}>From</Box>
                        <TextField
                            margin="normal"
                            required
                            id="minTravelersNumber"
                            label="Min. size of the group"
                            onChange={(e) => setMinTravelersNumber(parseInt(e.target.value))}
                        />
                        <Box sx={{ typography: 'subtitle2' }}>to</Box>
                        <TextField
                            margin="normal"
                            required
                            id="maxTravelersNumber"
                            label="Max. size of the group"
                            onChange={(e) => setMaxTravelersNumber(parseInt(e.target.value))}
                        />
                        <Box sx={{ typography: 'subtitle2' }}>travelers</Box>
                    </Box>
                    <Box>
                        <LoadingButton
                            color="secondary"
                            fullWidth
                            type="submit"
                            loading={isPostingTrip}
                            variant="contained"
                        >
                            Create
                        </LoadingButton>
                    </Box>
                </form>
            </Paper>

        </>
    )
}