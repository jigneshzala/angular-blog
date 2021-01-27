import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageService } from "../admin/manage/pages/shared/page.service";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.component.html",
  styleUrls: ["./terms.component.scss"],
})
export class TermsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) {}
  terms: any;

  ngOnInit(): void {
    this.pageService.getPageBySlug("privacy").subscribe((data) => {
      this.terms = data;
    });
  }
}
