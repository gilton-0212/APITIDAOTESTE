import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const APP_ROUTS: Routes = [
  {  path: 'user', component: UserComponent },
  {  path:  '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTS);
