import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { TripFormService, TripFormGroup } from './trip-form.service';
import { ITrip } from '../trip.model';
import { TripService } from '../service/trip.service';

@Component({
  selector: 'jhi-trip-update',
  templateUrl: './trip-update.component.html',
})
export class TripUpdateComponent implements OnInit {
  isSaving = false;
  trip: ITrip | null = null;

  editForm: TripFormGroup = this.tripFormService.createTripFormGroup();

  constructor(protected tripService: TripService, protected tripFormService: TripFormService, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ trip }) => {
      this.trip = trip;
      if (trip) {
        this.updateForm(trip);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const trip = this.tripFormService.getTrip(this.editForm);
    if (trip.id !== null) {
      this.subscribeToSaveResponse(this.tripService.update(trip));
    } else {
      this.subscribeToSaveResponse(this.tripService.create(trip));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITrip>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(trip: ITrip): void {
    this.trip = trip;
    this.tripFormService.resetForm(this.editForm, trip);
  }
}
