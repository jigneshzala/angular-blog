import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    this.router.navigate(["/posts"]);
  }
}
