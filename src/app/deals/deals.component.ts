import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  constructor(private seoService : SeoService) {
    this.seoService.updateTitle(`Promo Codes, Coupons, Deals & Offers for Web Development - TutsCoder`);
    this.seoService.updateDescription('Get exclusive discount using our promo code, coupons, and promotion links');
   }

  ngOnInit(): void {
  }

}