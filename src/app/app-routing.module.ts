import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DetailsComponent } from './employees/details/details.component';
import { UserComponent } from './user/user.component';


// const routes: Routes = [
//   {
//     path: '',
//     component: EmployeesComponent
//   },
//   {
//     path: 'employees',
//     component: EmployeesComponent
//   },
//   {
//     path: 'employees/:id',
//     component: DetailsComponent
//   }
// ];

const routes: Routes = [
     {
     path: '',
     component: EmployeesComponent
   },
   {
     path: 'employees',
     component: EmployeesComponent
   },
   {
     path: 'employees/:id',
     component: DetailsComponent
   },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'user',
      component: UserComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
  },
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
