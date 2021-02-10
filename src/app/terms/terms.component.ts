import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageService } from "../admin/manage/pages/shared/page.service";
import { SeoService } from "../shared/services/seo.service";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.component.html",
  styleUrls: ["./terms.component.scss"],
})
export class TermsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private seoService:SeoService
  ) {
    this.seoService.updateTitle(`Terms & Conditions | TutsCoder`);
    
  }
  terms: any;

  ngOnInit(): void {
    this.pageService.getPageBySlug("terms").subscribe((data) => {
      this.terms = data;
      this.seoService.updateDescription(this.terms.metaDescription);
    });
  }
}
