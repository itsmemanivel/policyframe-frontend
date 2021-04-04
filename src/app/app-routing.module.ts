import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './shared/services/auth.service';


const routes: Routes = [

  {path:'', loadChildren: () =>  import ('./client/client.module').then(m=>m.ClientModule)},
  {path:'client', loadChildren: () =>  import ('./client/client.module').then(m=>m.ClientModule)},
  {path:'admin', loadChildren: () =>  import ('./admin/admin.module').then(m=>m.AdminModule),

    canActivate:[AuthService]

},
 {path: 'login', component: AuthComponent},
  {path:'**', component:  PageNotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
