import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./pages/about/about.component'),
  },
  { path: '', title: 'Profile', component: ProfileComponent },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component'),
  },
];
