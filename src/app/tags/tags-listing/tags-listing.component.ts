import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/categories/shared/category.service";

@Component({
  selector: "app-tags-listing",
  templateUrl: "./tags-listing.component.html",
  styleUrls: ["./tags-listing.component.scss"],
})
export class TagsListingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}
  posts: any;
  tag: string;
  categories: any;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tag = params["slug"];
      this.getPostByCategory();
      this.getAllCategory();
    });
  }

  private getPostByCategory() {
    let reqData = {
      tag: this.tag,
      limit: "5",
    };
    this.categoryService.getPostByTag(reqData).subscribe((response) => {
      this.posts = response["posts"];
    });
  }
  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }
}
