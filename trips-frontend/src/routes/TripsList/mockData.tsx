import {TimeUnit, Trip} from "../../api/apiInterfaces";

export const mockTripsData: Trip[] = [
    {
        destination: "Monaco, France",
        // duration
        duration: 3,
        // unit of duration: Days, Weeks, Months
        durationUnit: TimeUnit.Weeks,
        minAttendants: 3,
        maxAttendants: 5
    },
    {
        destination: "Azores, Portugal",
        // duration
        duration: 2,
        // unit of duration: Days, Weeks, Months
        durationUnit: TimeUnit.Months,
        minAttendants: 6,
        maxAttendants: 7
    },{
        destination: "Buenos Aires, Argentina",
        // duration
        duration: 5,
        // unit of duration: Days, Weeks, Months
        durationUnit: TimeUnit.Days,
        minAttendants: 6,
        maxAttendants: 9
    },
    {
        destination: "Koh Phangan, Thailand",
        // duration
        duration: 1,
        // unit of duration: Days, Weeks, Months
        durationUnit: TimeUnit.Months,
        minAttendants: 5,
        maxAttendants: 6
    },

];