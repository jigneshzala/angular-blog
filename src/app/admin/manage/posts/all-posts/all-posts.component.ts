import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/posts/shared/post.service";

@Component({
  selector: "app-all-posts",
  templateUrl: "./all-posts.component.html",
  styleUrls: ["./all-posts.component.scss"],
})
export class AllPostsComponent implements OnInit {
  constructor(private postService: PostService) {}

  posts: any = [];
  ngOnInit() {
    this.postService.getAllPosts().subscribe((response) => {
      this.posts = response["data"]["posts"];
    });
  }

  deletePost(id) {
    this.postService.deletePost(id).subscribe((response) => {
      alert("post deleted");
    });
  }

  updatePostStatus(event,id){
    let reqData = {
      status:event
    }
    this.postService.updatePostStatus(id,reqData).subscribe((response) => {
      alert("post updated");
    });
  }
}
