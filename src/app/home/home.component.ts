import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../categories/shared/category.service";
import { PostService } from "../posts/shared/post.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private postService: PostService,
    private categoryService: CategoryService
  ) {}
  latestPosts: any = [];
  angularPosts: any = [];
  nodePosts: any = [];

  ngOnInit() {
    this.getLatestPosts();
    this.getPostByCategory("angular");
  }

  private getLatestPosts() {
    let reqData = {
      limit: 3,
    };
    this.postService.getPosts(reqData).subscribe((response) => {
      this.latestPosts = response["data"]["posts"];
    });
  }
  private getPostByCategory(category) {
    let reqData = {
      limit: 3,
      category: category,
    };

    this.categoryService.getPostByCateogry(reqData).subscribe((response) => {
      this.angularPosts = response["posts"];
    });
  }
}
