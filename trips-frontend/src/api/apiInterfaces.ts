export enum TimeUnit {
    Days = "days",
    Weeks = "weeks",
    Months = "months"
}

export interface Trip {
    // where to? To convert to a more complex type later, for the moment it's just a string
    destination: string,
    // duration
    duration: number,
    // unit of duration: Days, Weeks, Months
    durationUnit: TimeUnit,
    minAttendants: number,
    maxAttendants: number
}

