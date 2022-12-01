import {TripsCard} from "../../components/TripCard/TripCard";
import {Container, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {mockTripsData} from "./mockData";
import {useQuery, useQueryClient} from "react-query";

export const TripsList = () => {

    // const url = "http://localhost:8080/api/trips";
    const url = "https://run.mocky.io/v3/5dfec879-2ee1-41a8-8a88-d908c3ed11d6"
    const token = "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY3MjQyNTM5MH0.aZHuL3CNCHJiLSOWyFLwZ0E3pR9e2-swOlytzOlmJhf3l4FU1fWnbruSH_MCO9G57xsW3ZmGzps7eHG2M7JMuw";

    //const { isLoading, isError, data, error } = useQuery('getTrips', fetchTripsList);


    return <>
        <Container maxWidth="md">
            <h1>Trips List</h1>

        </Container>
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
