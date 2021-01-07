import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "src/app/posts/shared/post.service";
declare var tinymce: any;

@Component({
  selector: "app-post-new",
  templateUrl: "./post-new.component.html",
  styleUrls: ["./post-new.component.scss"],
})
export class PostNewComponent implements OnInit {
  constructor(private postService: PostService) {}
  newPost: any = {};
  dataModel:any;
  ngOnInit() {
    
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
}
