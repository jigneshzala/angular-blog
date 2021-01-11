import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { SharedPostModule } from "../shared/modules/shared-post.module";


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, LatestPostsComponent],
  imports: [CommonModule, SharedPostModule,RouterModule.forChild(routes)],
})
export class HomeModule {}
