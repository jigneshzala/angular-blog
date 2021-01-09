import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriesComponent } from "./categories.component";
import { CategoryListingComponent } from "../categories/category-listing/category-listing.component";
import { RouterModule, Routes } from "@angular/router";
import { CategoryService } from "./shared/category.service";

const routes: Routes = [
  {
    path: "category",
    component: CategoriesComponent,
    children: [
      {
        path: ":catId",
        component: CategoryListingComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [CategoriesComponent, CategoryListingComponent],
  providers:[CategoryService],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CategoriesModule {}
