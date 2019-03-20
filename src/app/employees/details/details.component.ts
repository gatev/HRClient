// import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
    this.route.params.subscribe( params => this.employee = params.id );
    console.log(this.employee);
  }

  ngOnInit() {
    console.log('employee');
    this.employeeService.getEmployee(this.employee).subscribe(data => {
      this.employee = data;
      console.log(this.employee.holiday);
      if (this.employee.holiday.isPaidHoliday = true) {
        console.log('true');
      } else {
        console.log('false');
      }
  });
}

}
