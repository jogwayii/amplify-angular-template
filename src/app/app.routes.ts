import { Routes } from '@angular/router';
import { Route1Component } from './route1';
import { Route2Component } from 'route2';

export const routes: Routes = [  
  {
    path: 'route1',
    component: Route1Component
  },  
  {
    path: 'route2',
    component: Route2Component
  }
];
