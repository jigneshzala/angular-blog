import { Component, OnInit } from '@angular/core';
import { PageService } from '../admin/manage/pages/shared/page.service';
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private pageService: PageService,private seoService : SeoService) { 
    
    this.seoService.updateTitle(`About us | TutsCoder`);

  //this.seoService.updateDescription(`${this.post.meta_description}`);
  }
  aboutUs:any = {}
  ngOnInit(): void {
    this.pageService.getPageBySlug("about-us").subscribe((data) => {
      this.aboutUs = data;
    });
  
  }
}
