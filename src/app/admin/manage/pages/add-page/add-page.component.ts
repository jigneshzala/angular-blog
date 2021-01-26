import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PageService } from "../shared/page.service";

@Component({
  selector: "app-add-page",
  templateUrl: "./add-page.component.html",
  styleUrls: ["./add-page.component.scss"],
})
export class AddPageComponent implements OnInit {
  constructor(private pageService: PageService) {}

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
  ngOnInit(): void {}

  createPost(postForm: NgForm, data) {
    //   validateInputs(postForm);
    if (postForm.invalid) {
      return;
    }

    let reqData = JSON.parse(JSON.stringify(data));

    // this.errors = [];
    this.pageService.createPage(reqData).subscribe(
      (data) => alert("Page Creted"),
      (errors) => console.log(errors)
    );
  }
}
