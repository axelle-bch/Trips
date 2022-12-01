export interface ITrip {
  id: number;
  destination?: string | null;
  minTravelersNumber?: number | null;
  maxTravelersNumber?: number | null;
}

export type NewTrip = Omit<ITrip, 'id'> & { id: null };
