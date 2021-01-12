import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CategoryService } from "src/app/categories/shared/category.service";
import { PostService } from "src/app/posts/shared/post.service";
declare var tinymce: any;

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  constructor(
    private postService: PostService,
    private categoryService: CategoryService
  ) {}
  newPost: any = {
    feature_image: {
      _id: "",
    },
  };
  dataModel: any;
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
  ngOnInit() {
    this.newPost.feature_image["_id"] = "";
    this.getAllCateogry();
    /*     tinymce.init({
      selector: "#mymce1",
      plugins:'code codesample',
      menubar: 'file edit view insert format tools table tc help',
      toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
      toolbar_mode: 'sliding',
    }); */
  }

  createPost(postForm: NgForm) {
    //   validateInputs(postForm);
    if (postForm.invalid) {
      return;
    }

    // this.errors = [];
    this.postService.createPost(this.newPost).subscribe(
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
      this.newPost.category = this.categoriesList[0].name;
    });
  }
}
