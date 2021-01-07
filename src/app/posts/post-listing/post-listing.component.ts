import { Component, OnInit } from "@angular/core";
import { PostService } from "../shared/post.service";
@Component({
  selector: "app-post-listing",
  templateUrl: "./post-listing.component.html",
  styleUrls: ["./post-listing.component.scss"],
})
export class PostListingComponent implements OnInit {
  constructor(private postService: PostService) {}

  posts: any = [];
  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
