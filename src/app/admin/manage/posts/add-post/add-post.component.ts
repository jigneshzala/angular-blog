import { Component, OnInit, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CategoryService } from "src/app/categories/shared/category.service";
import { PostService } from "src/app/posts/shared/post.service";
import { MediaService } from "../../../shared/media.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

declare var tinymce: any;

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private postService: PostService,
    private categoryService: CategoryService,
    private mediaService: MediaService,
    private modalService: BsModalService
  ) {}

  images: any = [];
  newPost: any = {
    feature_image: {
      _id: "",
    },
    categories:[],
    tags:[]
  };
  dataModel: any;
  tinyConfig: any = {
    height: 500,
    plugins: ["image imagetools codesample code link toc table"],
    imagetools_cors_hosts: ["res.cloudinary.com"],
    // imagetools_proxy: "proxy.php",
    menubar: "insert edit format table",
    toolbar:
      "undo redo | fontselect fontsizeselect formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | link | forecolor backcolor removeformat | image | codesample | toc",
    image_list: [
      { title: "My image 1", value: "https://www.tinymce.com/my1.gif" },
      { title: "My image 2", value: "http://www.moxiecode.com/my2.gif" },
    ],
    default_link_target: "_blank",
    toolbar_sticky: true,

  };
  categoriesList: any = [];
  tagsList: any = [];
  
 /*  autocompleteItemsAsObjects = [
    { value: 'Item1', id: '3'},
    { value: 'item2', id: '4' },
  ]; */


  ngOnInit() {
    this.newPost.feature_image["_id"] = "";
    this.getAllCateogry();
    this.getAllTags();
    this.getAllImages();
  }

  createPost(postForm: NgForm,data) {
    //   validateInputs(postForm);
    if (postForm.invalid) {
      return;
    }

    let reqData = JSON.parse(JSON.stringify(data));
 
   reqData.categories =reqData.categories.reduce(function(r, e) {
      r[e.name] = e.slug;
      return r;
    }, {});
    

    reqData.tags =reqData.tags.reduce(function(r, e) {
      r[e.name] = e.slug;
      return r;
    }, {});
     

    // this.errors = [];
     this.postService.createPost(reqData).subscribe(
      (data) => alert("Post Creted"),
      (errors) => console.log(errors)
    ); 
  }

  attachImageToPost(imageId: string) {
    this.newPost["feature_image"]["_id"] = imageId;
  }

  private getAllCateogry() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categoriesList = data;

      //this.newPost.category = this.categoriesList[0].name;
    });
  }
 
  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response['data']['tags'];
    });
  }

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
