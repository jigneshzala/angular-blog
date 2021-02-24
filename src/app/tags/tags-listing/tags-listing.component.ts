import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "src/app/categories/shared/category.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { SeoService } from "src/app/shared/services/seo.service";
import { CommanService } from "src/app/shared/services/comman.service";

@Component({
  selector: "app-tags-listing",
  templateUrl: "./tags-listing.component.html",
  styleUrls: ["./tags-listing.component.scss"],
})
export class TagsListingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private ngxService: NgxUiLoaderService,
    private seoService: SeoService,
    private commanService: CommanService
  ) {}
  posts: any;
  tag: string;
  categories: any;
  firstPost: any;
  tagsList: any = [];
  page: any = 1;
  limit: any = 5;
  totalPage: any;
  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      ([pathParams, queryParams]) => {
        this.ngxService.start();
        this.tag = pathParams.get("slug");

        this.seoService.setMetaTags({
          title: `${this.commanService.capitalizeFirstLetter(
            this.tag
          )} | TutsCoder`,
        });

        this.page = queryParams.get("page") ? +queryParams.get("page") : 1;
        this.getPostByTag();
        this.getAllCategory();
        this.getAllTags();
      }
    );
  }

  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response["data"]["tags"];
    });
  }

  private getPostByTag() {
    let reqData = {
      tag: this.tag,
      limit: "5",
    };
    this.categoryService.getPostByTag(reqData).subscribe((response) => {
      this.ngxService.stop();
      this.posts = response["data"];
      this.firstPost = this.posts[0];
      this.totalPage = response['totalPages'];
    });
  }
  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }

  prevNextPosts(type) {
    this.page = type == "next" ? this.page + 1 : this.page - 1;

    this.router.navigate([`/tag/${this.tag}`], {
      queryParams: { page: this.page },
    });
  }
}
