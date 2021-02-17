import { Component, OnInit } from "@angular/core";
import { UserService } from "../admin/manage/users/shared/user.service";
import { PostService } from "../posts/shared/post.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(private userService: UserService,private postService : PostService) {}
  popularPosts:any = [];
  ngOnInit(): void {
    this.getPopularPosts();
  }
  addSubscribe(email) {
    
    let reqData = {
      email: email,
    };
    this.userService.addSubscribe(reqData).subscribe((response) => {
      console.log(response);
    });
  }

  private getPopularPosts() {
   
    this.postService.getPopularPosts().subscribe((response) => {
      this.popularPosts = response;
    });
  }
}
