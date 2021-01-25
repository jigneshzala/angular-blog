import { Component, OnInit, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/categories/shared/category.service";
import { PostService } from "src/app/posts/shared/post.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { MediaService } from "../../../shared/media.service";
declare var tinymce: any;

@Component({
  selector: "app-update-post",
  templateUrl: "./update-post.component.html",
  styleUrls: ["./update-post.component.scss"],
})
export class UpdatePostComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService,
    private mediaService: MediaService,
    private modalService: BsModalService
  ) {}
  newPost: any = {
    feature_image: {
      _id: "",
      categories:[],
      tags:[]
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
  tagsList: any = [];
  postId: any;
  images: any = [];
  ngOnInit() {
    this.newPost.feature_image["_id"] = "";
    this.route.params.subscribe((params) => {
      this.postId = params["id"];
      this.getAllCateogry();
      this.getAllTags();
    });
  }

  updatePost(postForm: NgForm,data) {

    let reqData = JSON.parse(JSON.stringify(data));
 
    reqData.categories =reqData.categories.reduce(function(r, e) {
       r[e.name] = e.slug;
       return r;
     }, {});
     
 
     reqData.tags =reqData.tags.reduce(function(r, e) {
       r[e.name] = e.slug;
       return r;
     }, {});
     
     
    this.postService.updatePost(this.newPost._id, reqData).subscribe(
      (updatedPost) => {
        this.newPost = updatedPost;
        alert("Post Updated");
      },
      (error) => {
        alert("Update Error!");
      }
    );
  }

  attachImageToPost(postEvent: any) {
    
    delete this.newPost["feature_image"];
    this.newPost.feature_image = {};
    this.newPost["feature_image"]["_id"] = postEvent.data.feature_image;
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

  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response['data']['tags'];
    });
  }
  transformImage = (image: any): string => {
    
    return image.url;
  };

  private getAllImages() {
    this.mediaService.getImages().subscribe((response) => {
      this.images = response["data"]["images"];
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "modal-lg" })
    );
  }
  selected: any;
  selecteImage(item) {
    this.selected = item;
  }
  isActive(item) {
    return this.selected === item;
  }
  addSelectedImage() {
    tinymce.activeEditor.execCommand(
      "mceInsertContent",
      false,
      `<p><img src="${this.selected.url}" alt=""/></p>`
    );
    this.modalRef.hide();
  }
}
