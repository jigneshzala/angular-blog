import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/categories/shared/category.service";
import { SeoService } from "src/app/shared/services/seo.service";
import { SnippetService } from "../shared/snippet.service";

@Component({
  selector: "app-snippet-listing",
  templateUrl: "./snippet-listing.component.html",
  styleUrls: ["./snippet-listing.component.scss"],
})
export class SnippetListingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private snippetService: SnippetService,
    private categoryService: CategoryService,
    private seoService: SeoService
  ) {}

  posts: any;
  category: string;
  categories: any;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params["catname"];
      //this.seoService.updateTitle(`${this.category} | TutsCoder`);
      this.getPostByCategory();
      this.getAllCategory();
    });
  }

  private getPostByCategory() {
    this.snippetService
      .getSnippetByCategory(this.category)
      .subscribe((response) => {
        this.posts = response;
      });
  }
  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }
}
