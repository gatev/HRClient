import { Employee } from 'src/app/_models';
import { Holiday } from 'src/app/_models';
import { PaginationComponent } from './../../_utils/pagination/pagination.component';
import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../../_services/employee.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends PaginationComponent implements OnInit {
  headElements = ['От', 'До', 'Брой дни', 'Тип'];
  employee: Employee;
  holidays: Holiday[];
  isHoliday = false;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
    super();
    this.route.params.subscribe( params => this.employee = params.id );
  }

  ngOnInit() {
    this.employeeService.getEmployee(this.employee).subscribe(data => {
      this.employee = data;
      this.holidays = this.employee.holiday;
      if(this.holidays.length > 0) {
        this.isHoliday = true;
      }
      this.holidays.sort(function(h1, h2) {
         return h1.id - h2.id;
      });
  });
}

}
