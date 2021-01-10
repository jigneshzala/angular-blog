import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/shared/post.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  constructor(private postService: PostService) {}

  posts: any = [];
  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
