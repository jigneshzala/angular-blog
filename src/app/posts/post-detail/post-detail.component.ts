import { AfterViewChecked, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/categories/shared/category.service";
import { HighlightService } from "src/app/shared/services/highlight.service";
import { PostService } from "../shared/post.service";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"],
})
export class PostDetailComponent implements OnInit, AfterViewChecked {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private highlightService: HighlightService,
    private categoryService: CategoryService
  ) {}
  post: any;
  highlighted: boolean = false;
  posts:any;
  categories:any;

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    if (this.post && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postService.getPostById(params["postId"]).subscribe((post) => {
        this.post = post;
        this.getPostByCategory();
        this.getAllCategory();
      });
    });
  }


  private getPostByCategory() {
    this.categoryService.getPostByCateogry('angular').subscribe((posts) => {
      this.posts = posts;
    });
  }
  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }
}
