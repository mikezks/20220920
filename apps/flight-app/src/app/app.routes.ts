import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
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
    loadChildren: () => loadRemoteModule<{ PassengerModule: any }>({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './module'
    })
      .then(esm => esm.PassengerModule)
  },
  /* {
    path: 'flight',
    loadChildren: () => import('./flight-booking/flight-booking.routes')
      .then(esm => esm.FLIGHT_BOOKING_ROUTES)
  }, */
  {
    path: 'about',
    loadComponent: () => import('./about/about.component')
      .then(esm => esm.AboutComponent)
  },
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
