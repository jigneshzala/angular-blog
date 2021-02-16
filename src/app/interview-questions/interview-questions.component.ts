import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageService } from "../admin/manage/pages/shared/page.service";
import { SeoService } from "../shared/services/seo.service";

@Component({
  selector: "app-interview-questions",
  templateUrl: "./interview-questions.component.html",
  styleUrls: ["./interview-questions.component.scss"],
})
export class InterviewQuestionsComponent implements OnInit {
  constructor(
    private pageService: PageService,
    private seoService: SeoService,
    private route: ActivatedRoute
  ) {
    //this.seoService.updateDescription(`${this.post.meta_description}`);
  }
  pageData: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pageService.getPageBySlug(params["slug"]).subscribe((data) => {
        this.pageData = data;
        
        this.seoService.setMetaTags({
          title:`${this.pageData.title} | TutsCoder`,
          description:this.pageData.metaDescription
        });
  
      });
    });
  }
}
