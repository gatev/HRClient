import { Employee } from './../_models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public API_URL = 'http://localhost:8080/api/employees/';

  private userUrl = 'http://localhost:8080/api/test/user';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
       return this.http.get<Employee[]>(this.API_URL);
  }

  getEmployee(employeeId): Observable<Employee> {
    return this.http.get<Employee>(this.API_URL + employeeId);
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

}
