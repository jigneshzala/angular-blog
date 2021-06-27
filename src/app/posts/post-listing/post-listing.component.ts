import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { CategoryService } from "src/app/categories/shared/category.service";
import { PostService } from "../shared/post.service";
import { ActivatedRoute, Router } from "@angular/router";
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: "app-post-listing",
  templateUrl: "./post-listing.component.html",
  styleUrls: ["./post-listing.component.scss"],
})
export class PostListingComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platform: Object,
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
  totalPage:any;
  totalItem:any;
  tagsList:any = [];
  errors:any;
  isLoaded:boolean = false;
  // defaultImage = "https://via.placeholder.com/700x400.png?text=Tutscoder";
  defaultImage = "./assets/images/700x400.png";

  ngOnInit() {

    this.activeRoute.queryParams.subscribe(queryParams  =>{
      
      this.page =  queryParams['page'] ? +queryParams['page'] : 1;
      
      this.getAllCategory();
      
      this.getAllTags();
      
      this.getAllPost();

    })

 

  }

  count = 0;


  onTableDataChange(event){
    this.page = event;
    
    this.route.navigate(['/post'], { queryParams: { page: this.page } });
    

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

    console.log('req',reqData);
    this.postService.getPosts(reqData).subscribe(response => {
      console.log('response===>', response);
      console.log('Before=====>',this.posts);
      this.posts = response["data"];
      console.log('After======>',this.posts);
      if(this.posts.length){
        this.firstPost = this.posts[0];
        this.totalPage = response['totalPages'];
        this.totalItem = response['total'];

      }  
      

      this.isLoaded = true;

      if (isPlatformBrowser(this.platform)) {
        window.scrollTo(0, 0);
      }
      
    },error=>{
      this.isLoaded = true;
      
      this.errors = error.error;
    });
  }

  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }

}
