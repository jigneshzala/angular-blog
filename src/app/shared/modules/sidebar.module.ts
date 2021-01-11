import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopularPostComponent } from "./popular-post/popular-post.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { TagsComponent } from "./tags/tags.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PopularPostComponent, CategoryListComponent, TagsComponent],
  exports: [PopularPostComponent, CategoryListComponent, TagsComponent],
  imports: [CommonModule, RouterModule],
})
export class SidebarModule {}
