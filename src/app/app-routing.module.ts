import { EmployeeService } from './_services/employee.service';
import { AuthGuard } from './_guards/auth.guard';
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
//     {
//    path: '',
 //    component: EmployeesComponent
//   },
   {
     path: 'employees',
     component: EmployeesComponent,
     canActivate: [AuthGuard] ,
     resolve: {
      employee: EmployeeService
    }
   },
   {
     path: 'employees/:id',
     component: DetailsComponent,
     canActivate: [AuthGuard]
   },
  {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'user',
      component: UserComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard]
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
