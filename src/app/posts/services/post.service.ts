import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public API_URL = 'http://localhost:8080/api/employee/';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.API_URL + 'getAllDayOffRequests');
  }

  getPost(postId): Observable<any> {
    return this.http.get(this.API_URL + 'request/' + postId);
  }

}
