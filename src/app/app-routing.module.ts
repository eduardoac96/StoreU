import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'; 

const routes: Routes = [
   
    {
      path: '',
      loadChildren: './@theme/external/login/login.module#LoginModule'
    },
    {
      path: 'login',
      loadChildren: './@theme/external/login/login.module#LoginModule'
    },
    {
      path: 'logout',
      loadChildren: './@theme/external/logout/logout.module#LogoutModule'
    }, 
    {
      path: 'register',
      loadChildren: './@theme/external/register/register.module#RegisterModule'
    },
    {
      path: 'forgot',
      loadChildren: './forgot/forgot.module#ForgotModule'
    },
    {
      path: 'dashboard',
      loadChildren: './components/dashboard/dashboard.module#DashboardModule'
    },
  
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
