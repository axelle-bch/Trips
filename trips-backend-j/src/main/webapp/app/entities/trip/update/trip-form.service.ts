import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITrip, NewTrip } from '../trip.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITrip for edit and NewTripFormGroupInput for create.
 */
type TripFormGroupInput = ITrip | PartialWithRequiredKeyOf<NewTrip>;

type TripFormDefaults = Pick<NewTrip, 'id'>;

type TripFormGroupContent = {
  id: FormControl<ITrip['id'] | NewTrip['id']>;
  destination: FormControl<ITrip['destination']>;
  minTravelersNumber: FormControl<ITrip['minTravelersNumber']>;
  maxTravelersNumber: FormControl<ITrip['maxTravelersNumber']>;
};

export type TripFormGroup = FormGroup<TripFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class TripFormService {
  createTripFormGroup(trip: TripFormGroupInput = { id: null }): TripFormGroup {
    const tripRawValue = {
      ...this.getFormDefaults(),
      ...trip,
    };
    return new FormGroup<TripFormGroupContent>({
      id: new FormControl(
        { value: tripRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      destination: new FormControl(tripRawValue.destination),
      minTravelersNumber: new FormControl(tripRawValue.minTravelersNumber),
      maxTravelersNumber: new FormControl(tripRawValue.maxTravelersNumber),
    });
  }

  getTrip(form: TripFormGroup): ITrip | NewTrip {
    return form.getRawValue() as ITrip | NewTrip;
  }

  resetForm(form: TripFormGroup, trip: TripFormGroupInput): void {
    const tripRawValue = { ...this.getFormDefaults(), ...trip };
    form.reset(
      {
        ...tripRawValue,
        id: { value: tripRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): TripFormDefaults {
    return {
      id: null,
    };
  }
}
