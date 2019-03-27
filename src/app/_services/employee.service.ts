import { Employee } from './../_models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements Resolve<any> {

  public API_URL = 'http://localhost:8080/api/employees/';

  private userUrl = 'http://localhost:8080/api/test/user';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient, private router: Router) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Employee[]> {
    return this.getAllEmployees();
  }

  getAllEmployees(): Observable<Employee[]> {
       return this.http.get<Employee[]>(this.API_URL)
       .pipe(retry(1), catchError(this.handleError));
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

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      this.router.navigate(['auth/login']);
      // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
