import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/categories/shared/category.service";
import { QuestionService } from "src/app/questions/shared/question.service";

@Component({
  selector: "app-update-question",
  templateUrl: "./update-question.component.html",
  styleUrls: ["./update-question.component.scss"],
})
export class UpdateQuestionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private questionService: QuestionService
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

  snippetSlug: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.snippetSlug = params["slug"];
      this.getAllCateogry();
    });
  }

  private getAllCateogry() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categoriesList = data;
      this.questionService
        .getQuestionBySlug(this.snippetSlug)
        .subscribe((post) => {
          this.newPost = post;
        });
      //this.newPost.category = this.categoriesList[0].name;
    });
  }

  updatePost(postForm: NgForm, data) {
    let reqData = JSON.parse(JSON.stringify(data));

    this.questionService.updateQuestion(this.newPost._id, reqData).subscribe(
      (updatedPost) => {
        this.newPost = updatedPost;
        alert("Post Updated");
      },
      (error) => {
        alert("Update Error!");
      }
    );
  }
}
