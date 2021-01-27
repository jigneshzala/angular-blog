import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopularPostComponent } from "./popular-post/popular-post.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { TagsListComponent } from "./tags-list/tags-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PopularPostComponent,
    CategoryListComponent,
    TagsListComponent,
  ],
  exports: [PopularPostComponent, CategoryListComponent, TagsListComponent],
  imports: [CommonModule, RouterModule],
})
export class SidebarModule {}
