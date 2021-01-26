import { Component, OnInit } from "@angular/core";
import { PageService } from "../shared/page.service";

@Component({
  selector: "app-all-page",
  templateUrl: "./all-page.component.html",
  styleUrls: ["./all-page.component.scss"],
})
export class AllPageComponent implements OnInit {
  constructor(private pageService: PageService) {}
  posts: any = [];
  ngOnInit() {
    this.pageService.getPages().subscribe((response) => {
      this.posts = response["data"]["pages"];
    });
  }

  deletePage(id) {
    this.pageService.deletePage(id).subscribe((response) => {
      alert("page deleted");
    });
  }
}
