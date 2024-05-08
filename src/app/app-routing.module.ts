import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/landingpage/landingpage.module').then(m => m.LandingpageModule)
  },
  {
    path:'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dash',
    loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule)
  }, {
    path:'profile', 
    loadChildren:() => import('../app/user/user/user.module').then(m=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
