import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "src/app/posts/shared/post.service";

@Component({
  selector: "app-post-new",
  templateUrl: "./post-new.component.html",
  styleUrls: ["./post-new.component.scss"],
})
export class PostNewComponent implements OnInit {
  constructor(private postService: PostService) {}
  newPost: any = {};
  ngOnInit(): void {}

  createPost(postForm: NgForm) {
    //   validateInputs(postForm);
    if (postForm.invalid) {
      return;
    }

    // this.errors = [];
    this.postService.createPost(this.newPost).subscribe(
      (data) => alert("Post Creted"),
      (errors) => console.log(errors)
    );
  }
}
