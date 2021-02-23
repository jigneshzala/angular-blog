import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/categories/shared/category.service";
import { PostService } from "../shared/post.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-post-listing",
  templateUrl: "./post-listing.component.html",
  styleUrls: ["./post-listing.component.scss"],
})
export class PostListingComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private postService: PostService,
    private categoryService: CategoryService
  ) {}

  posts: any = [];
  categories: any;
  page: any = 1;
  limit: any = 5;
  firstPost:any
  tagsList:any = [];

  ngOnInit() {
    
    this.getAllCategory();
    this.getAllTags();

    this.activeRoute.queryParams.subscribe(queryParams  =>{

      this.page =  queryParams['page'] ? +queryParams['page'] : 1;
      this.getAllPost();

    })

    
    /*  this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    }); */
  }

  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response["data"]["tags"];
    });
  }

  private getAllPost() {
    let reqData = {
      limit: this.limit,
      page: this.page,
    };
    this.postService.getPosts(reqData).subscribe((response) => {
      
      this.posts = response["data"]["posts"];
      this.firstPost = this.posts[0];
    });
  }

  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }

  prevNextPosts(type) {
    if (type == "next") {
      this.page = this.page + 1;
    } else {
      this.page = this.page - 1;
    }

  
    //this.getAllPost();

    this.route.navigate(['/post'], { queryParams: { page: this.page } });
    
  }
}
