import {Container, Grid, Typography} from "@mui/material";
import {useQuery, useQueryClient} from "react-query";
import apiClient from '../../http-common'
import {useEffect, useState} from "react";
import {useGetAllTrips} from "../../api/hooks/useGetAllTrips";

export const TripsList = () => {

    const [getResult, setGetResult] = useState(null);

    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    const { data, isLoading: isLoadingData, refetch: getData} = useGetAllTrips();

    console.log({data});

    return <>
        <Typography variant={"h2"}>Trips List</Typography>
        {data && (
            <div className="alert alert-secondary mt-2" role="alert">
                <pre>{JSON.stringify(data.data)}</pre>
            </div>
        )}
    </>

//     return <>
//         <Container maxWidth="md">
//             <h1>Trips List</h1>
//             <Grid container>
//                 {mockTripsData.map((trip, index) => (
//                     <Grid item xs={3}>
//                         <TripsCard trip={trip} />
//                     </Grid>
//                 ))}
//             </Grid>
//
//         </Container>
//     </>

}
