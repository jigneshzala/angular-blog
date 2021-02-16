import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommanService } from "src/app/shared/services/comman.service";
import { SeoService } from "src/app/shared/services/seo.service";
import { CategoryService } from "../shared/category.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-category-listing",
  templateUrl: "./category-listing.component.html",
  styleUrls: ["./category-listing.component.scss"],
})
export class CategoryListingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private seoService: SeoService,
    private commanService: CommanService,
    private ngxService: NgxUiLoaderService
  ) {}
  posts: any;
  category: string;
  categories: any;
  firstPost: any;
  tagsList: any = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ngxService.start();
      this.category = params["catId"];

      this.seoService.setMetaTags({
        title: `${this.commanService.capitalizeFirstLetter(
          this.category
        )} | TutsCoder`,
      });

      //this.seoService.updateDescription(``);
      this.getPostByCategory();
      this.getAllCategory();
      this.getAllTags();
    });
  }

  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response["data"]["tags"];
    });
  }

  private getPostByCategory() {
    let reqData = {
      category: this.category,
      limit: "5",
    };
    this.categoryService.getPostByCateogry(reqData).subscribe((response) => {
      this.posts = response["posts"];
      this.firstPost = this.posts[0];
    });
  }
  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
      this.ngxService.stop();
    });
  }
}
