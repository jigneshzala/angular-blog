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
  newPost: any = {
    "image":{
      "_id":''
    }
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
  ngOnInit() {
    this.newPost.image['_id']='ss';
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

    console.log(this.newPost);
    // this.errors = [];
    this.postService.createPost(this.newPost).subscribe(
      (data) => alert("Post Creted"),
      (errors) => console.log(errors)
    );
  }

  attachImageToPost(imageId: string) {
    console.log(imageId);
    this.newPost['image']['_id'] = imageId;
    console.log(this.newPost);
  }
}
