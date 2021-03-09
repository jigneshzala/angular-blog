import { Component, OnInit } from "@angular/core";
import { UserService } from "../admin/manage/users/shared/user.service";
import { PostService } from "../posts/shared/post.service";
import { LocalStorageService } from "../shared/services/local-storage.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(
    private userService: UserService,
    private postService: PostService,
    private localStorageService: LocalStorageService
  ) {}
  popularPosts: any = [];
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
    if (this.localStorageService.getLocalStorage("popularData")) {
      this.popularPosts = JSON.parse(
        this.localStorageService.getLocalStorage("popularData")
      );
    } else {
      this.postService.getPopularPosts().subscribe((data) => {
        this.popularPosts = data;
        this.localStorageService.setLocalStorage(
          "popularData",
          JSON.stringify(data)
        );
      });
    }

    this.postService.getPopularPosts().subscribe((response) => {
      this.popularPosts = response;
    });
  }
}
