import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public API_URL = 'http://localhost:8080/api/employee/';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
       return this.http.get(this.API_URL + 'all');
  }

  getEmployee(employeeId): Observable<any> {
    return this.http.get(this.API_URL + employeeId);
  }

}
