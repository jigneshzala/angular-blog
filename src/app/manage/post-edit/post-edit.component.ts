import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/categories/shared/category.service";
import { PostService } from "src/app/posts/shared/post.service";
declare var tinymce: any;

@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.scss"],
})
export class PostEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService
  ) {}
  newPost: any = {
    image: {
      _id: "",
    },
  };
  post: any;
  tinyConfig: any = {
    height: 300,
    plugins: ["image imagetools codesample code link "],
    imagetools_cors_hosts: ["localhost"],
    imagetools_proxy: "proxy.php",
    menubar: "insert",
    toolbar:
      "undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | link | removeformat | image | codesample",
    image_list: [
      { title: "My image 1", value: "https://www.tinymce.com/my1.gif" },
      { title: "My image 2", value: "http://www.moxiecode.com/my2.gif" },
    ],
    default_link_target: "_blank",
  };
  categoriesList: any = [];
  postId: any;
  ngOnInit() {
    this.newPost.image["_id"] = "";
    this.route.params.subscribe((params) => {
      this.postId = params["postId"];
      this.getAllCateogry();
    });
  }

  updatePost(postForm: NgForm) {
    this.postService.updatePost(this.newPost._id, this.newPost).subscribe(
      (updatedPost) => {
        this.newPost = updatedPost;
        alert('Post Updated');
      },
      (error) => {
        alert("Update Error!");
      }
    );
  }

  attachImageToPost(postEvent: any) {
    delete this.newPost["image"]; 
    this.newPost.image = {};
    this.newPost["image"]["_id"] = postEvent.data.image;
  }

  private getAllCateogry() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categoriesList = data;
      this.postService.getPostById(this.postId).subscribe((post) => {
        this.newPost = post;
      });
      //this.newPost.category = this.categoriesList[0].name;
    });
  }
  transformImage = (image: any): string => {
    return image.url;
  };
}
