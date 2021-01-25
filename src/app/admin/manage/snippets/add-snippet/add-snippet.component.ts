import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CategoryService } from "src/app/categories/shared/category.service";
import { SnippetService } from "src/app/snippets/shared/snippet.service";
declare var tinymce: any;

@Component({
  selector: "app-add-snippet",
  templateUrl: "./add-snippet.component.html",
  styleUrls: ["./add-snippet.component.scss"],
})
export class AddSnippetComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private snippetService: SnippetService
  ) {}

  newPost: any = {};
  categoriesList: any = [];
  tinyConfig: any = {
    height: 500,
    plugins: ["image imagetools codesample code link "],
    imagetools_cors_hosts: ["res.cloudinary.com"],
    // imagetools_proxy: "proxy.php",
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
  ngOnInit(): void {
    this.getAllCateogry();
  }

  private getAllCateogry() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categoriesList = data;
    });
  }

  createPost(postForm: NgForm, data) {
    //   validateInputs(postForm);
    if (postForm.invalid) {
      return;
    }

    let reqData = JSON.parse(JSON.stringify(data));

    // this.errors = [];
    this.snippetService.createSnippet(reqData).subscribe(
      (data) => alert("Post Creted"),
      (errors) => console.log(errors)
    );
  }
}
