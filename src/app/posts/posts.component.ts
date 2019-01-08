import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { EmployeeService } from '../employees/services/employee.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Object;

  constructor(private postSevice: PostService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.postSevice.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
