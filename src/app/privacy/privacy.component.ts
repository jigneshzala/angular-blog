import { Component, OnInit } from '@angular/core';
import { PageService } from '../admin/manage/pages/shared/page.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private pageService: PageService) { }
  privacyPolicy
  ngOnInit(): void {
    this.pageService.getPageBySlug("privacy").subscribe((data) => {
      this.privacyPolicy = data;
    });
  
  }

}
