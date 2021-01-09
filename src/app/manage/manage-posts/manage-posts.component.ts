import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/posts/shared/post.service';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.scss']
})
export class ManagePostsComponent implements OnInit {

  constructor(private postService: PostService) {}

  posts: any = [];
  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

}
