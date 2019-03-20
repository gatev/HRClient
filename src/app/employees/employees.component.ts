import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Employee } from './employee';
import { EmployeeService } from '../employees/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  // @Input()
  // employee: Employee;

  employees: Employee[];
  constructor(private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}






