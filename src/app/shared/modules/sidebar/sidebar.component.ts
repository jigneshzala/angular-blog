import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/categories/shared/category.service";
import { PostService } from "src/app/posts/shared/post.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor(
    private postService: PostService,
    private categoryService: CategoryService
  ) {}
  featuredPosts: any = [];
  categories: any = [];
  tagsList: any = [];
  ngOnInit() {
    this.getFeaturedPosts();
    this.getAllCategory();
    this.getAllTags();
  }
  private getFeaturedPosts() {
    this.postService.getFeaturedPosts().subscribe((response) => {
      this.featuredPosts = response;
    });
  }

  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }

  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response["data"]["tags"];
    });
  }
}
