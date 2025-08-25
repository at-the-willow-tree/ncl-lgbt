import { Routes } from '@angular/router';
import { NavPaths } from '@constants/nav-paths';
import { AboutComponent } from '@components/about/about.component';
import { SubmitComponent } from '@components/submit/submit';
import { FundraisersComponent } from '@components/fundraisers/fundraisers.component';
import { ReviewComponent } from '@components/review/review.component';
import { ResourcesComponent } from '@components/resources/resources.component';
import { HomeComponent } from '@components/home/home.component';

export const routes: Routes = [
  { path: NavPaths.Home, component: HomeComponent, pathMatch: 'full' },
  { path: NavPaths.About, component: AboutComponent },
  {
    path: NavPaths.Events,
    loadChildren: () =>
      import('@components/events/events.module').then((m) => m.EventsModule),
  },
  { path: NavPaths.Fundraisers, component: FundraisersComponent },
  { path: NavPaths.Submit, component: SubmitComponent },
  { path: NavPaths.Review, component: ReviewComponent },
  { path: NavPaths.Resources, component: ResourcesComponent },
  { path: '**', redirectTo: '' },
];
