import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "../shared/category.service";

@Component({
  selector: "app-category-listing",
  templateUrl: "./category-listing.component.html",
  styleUrls: ["./category-listing.component.scss"],
})
export class CategoryListingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}
  posts: any;
  category: string;
  categories:any;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params["catId"];
      this.getPostByCategory();
      this.getAllCategory();
    });
  }

  private getPostByCategory() {
    let reqData = {
      category:this.category,
      limit:'5'
    }
    this.categoryService.getPostByCateogry(reqData).subscribe((response) => {
      this.posts = response['posts'];
      
    });
  }
  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }
}
