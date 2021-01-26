import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PageService } from "../shared/page.service";

@Component({
  selector: "app-update-page",
  templateUrl: "./update-page.component.html",
  styleUrls: ["./update-page.component.scss"],
})
export class UpdatePageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) {}
  newPost: any = {};
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

  snippetSlug: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getPage(params["id"]);
    });
  }

  private getPage(id) {
    this.pageService.getPageById(id).subscribe((post) => {
      this.newPost = post;
    });
    //this.newPost.category = this.categoriesList[0].name;
  }

  updatePost(postForm: NgForm, data) {
    let reqData = JSON.parse(JSON.stringify(data));

    this.pageService.updatePage(this.newPost._id, reqData).subscribe(
      (updatedPost) => {
        this.newPost = updatedPost;
        alert("Page Updated");
      },
      (error) => {
        alert("Update Error!");
      }
    );
  }
}
