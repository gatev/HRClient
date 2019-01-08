import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
    this.route.params.subscribe( params => this.employee = params.id );
  }

  ngOnInit() {
    this.employeeService.getEmployee(this.employee).subscribe(data => {
      this.employee = data;
  });
}

}
