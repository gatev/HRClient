import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DetailsComponent } from './employees/details/details.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
