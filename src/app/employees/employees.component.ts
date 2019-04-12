import { Employee } from './../_models/employee';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';



import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  // @Input()
  // employee: Employee;
  searchText: string;

  employees: Employee[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employees = this.activatedRoute.snapshot.data['employee'];
  }
}
