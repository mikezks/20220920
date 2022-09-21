import {Routes} from '@angular/router';
import {FlightBookingComponent} from './flight-booking.component';
import {PassengerSearchComponent} from './features/passenger-search/passenger-search.component';
import { FlightEditComponent } from './features/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: 'flight-booking',
    component: FlightBookingComponent,
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent
      }
    ],
    providers: [

    ]
  }

]
