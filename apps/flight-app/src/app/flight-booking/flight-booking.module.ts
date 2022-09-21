import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {FlightBookingComponent} from './flight-booking.component';
import {FLIGHT_BOOKING_ROUTES} from './flight-booking.routes';
import { FlightEditComponent } from './features/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';
import { FlightCardComponent } from './ui/flight-card/flight-card.component';
import {PassengerSearchComponent} from './features/passenger-search/passenger-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forChild(),
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    FlightBookingComponent
  ],
  providers: [],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule {
}
