import { Component, OnInit } from "@angular/core";
import { UserService } from "../admin/manage/users/shared/user.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  addSubscribe(email) {
    console.log(email);
    let reqData = {
      email: email,
    };
    this.userService.addSubscribe(reqData).subscribe((response) => {
      console.log(response);
    });
  }
}
