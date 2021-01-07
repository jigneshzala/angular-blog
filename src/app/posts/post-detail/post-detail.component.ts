import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../shared/post.service";
@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"],
})
export class PostDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}
  post: any;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postService.getPostById(params["postId"]).subscribe((post) => {
        this.post = post;
      });
    });
  }
}
