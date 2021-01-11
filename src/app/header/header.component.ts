import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../categories/shared/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private categoryService : CategoryService) { }
  categories:any = [];
  ngOnInit() {
    this.getAllCategory();
  }

  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }
  updatemenu() {
  /*   if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    } */
  }

}
