import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {

  post: Object;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.params.subscribe( params => this.post = params.id );
  }

  ngOnInit() {
    this.postService.getPost(this.post).subscribe(data => {
      this.post = data;
  });
}

}
