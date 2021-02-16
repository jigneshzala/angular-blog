import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { response } from "express";
import { UserService } from "src/app/admin/manage/users/shared/user.service";
import { CategoryService } from "src/app/categories/shared/category.service";
import { CommanService } from "src/app/shared/services/comman.service";
import { HighlightService } from "src/app/shared/services/highlight.service";
import { SeoService } from "src/app/shared/services/seo.service";
import { PostService } from "../shared/post.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"],
  encapsulation: ViewEncapsulation.None,

})
export class PostDetailComponent implements OnInit, AfterViewChecked {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private highlightService: HighlightService,
    private categoryService: CategoryService,
    private seoService: SeoService,
    private userService: UserService,
    private commanService: CommanService,
    private ngxService: NgxUiLoaderService
  ) {}
  post: any;
  highlighted: boolean = false;
  posts: any;
  categories: any;
  tagsList: any;
  hideme: any = {};
  relatedPosts:any = [];
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      this.ngxService.start();
      this.postService.getPostBySlug(params["slug"]).subscribe((post) => {

        this.post = post;
        
        this.seoService.setMetaTags({
          title:`${this.post.title} | TutsCoder`,
          description:`${this.post.meta_description}`
        });
        this.getPostByCategory();
        this.getAllCategory();
        this.getAllTags();
        this.getRelatedPosts();
      });
    });
  }

  private getPostByCategory() {
    this.categoryService.getPostByCateogry("angular").subscribe((posts) => {
      this.posts = posts;
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
  private getRelatedPosts() {
    
     let reqData = {
      _id:this.post._id,
      categories:this.post.categories.map(value => value._id)
    }
    this.postService.getRelatedPosts(reqData).subscribe((response) => {
      this.relatedPosts = response;
      this.ngxService.stop();
    }); 
  }
  
  commentData: any = {};
  replyData: any = {};
  subscriberEmail: any = {};
  addComment(commentForm: NgForm, data) {
    if (commentForm.invalid) {
      return;
    }

    this.postService.addComment(this.post._id, data).subscribe((response) => {
      alert("Comment added");
    });
  }
  replyComment(replyForm: NgForm, data, commentId) {
    if (replyForm.invalid) {
      return;
    }
    let reqData = JSON.parse(JSON.stringify(data));

    reqData.commentId = commentId;

    this.postService
      .replyComment(this.post._id, reqData)
      .subscribe((response) => {
        alert("Comment added");
      });
  }
  emailError: any = "";
  addSubscribe(form: NgForm, email) {
    if (form.invalid) {
      return;
    }
    console.log(email);
    let reqData = {
      email: email,
    };
  /*   this.userService.addSubscribe(reqData).subscribe((response) => {
      console.log(response);
    }); */
  }
}
