import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { LatestPostsComponent } from "./latest-posts/latest-posts.component";
import { SharedPostModule } from "../shared/modules/shared-post.module";
import { NgxSmartModalModule } from 'ngx-smart-modal';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, LatestPostsComponent],
  imports: [CommonModule, SharedPostModule, NgxSmartModalModule.forRoot(),RouterModule.forChild(routes)],
})
export class HomeModule {}
