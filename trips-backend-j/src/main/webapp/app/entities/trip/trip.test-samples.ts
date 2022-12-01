import { ITrip, NewTrip } from './trip.model';

export const sampleWithRequiredData: ITrip = {
  id: 75049,
};

export const sampleWithPartialData: ITrip = {
  id: 93814,
  destination: 'Checking Cambridgeshire invoice',
  minTravelersNumber: 12940,
  maxTravelersNumber: 38320,
};

export const sampleWithFullData: ITrip = {
  id: 55539,
  destination: 'Networked',
  minTravelersNumber: 41188,
  maxTravelersNumber: 20200,
};

export const sampleWithNewData: NewTrip = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
