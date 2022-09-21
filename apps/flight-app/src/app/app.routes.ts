import { Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mf-passenger',
    loadChildren: () => import('passenger/module')
      .then(esm => esm.PassengerModule)
  },
  /* {
    path: 'flight',
    loadChildren: () => import('./flight-booking/flight-booking.routes')
      .then(esm => esm.FLIGHT_BOOKING_ROUTES)
  },
  {
    path: 'flight/search',
    loadComponent: () => import('./flight-booking/flight-search/flight-search.component')
      .then(esm => esm.FlightSearchComponent)
  }, */
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
