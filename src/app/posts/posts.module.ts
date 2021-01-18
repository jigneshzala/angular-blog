import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsComponent } from "./posts.component";
import { PostListingComponent } from "./post-listing/post-listing.component";
import { RouterModule, Routes } from "@angular/router";
import { PostService } from "./shared/post.service";
import { PostDetailComponent } from "./post-detail/post-detail.component";

import { SharedPostModule } from "../shared/modules/shared-post.module";
import { SidebarModule } from "../shared/modules/sidebar.module";
const routes: Routes = [
  {
    path: "posts",
    component: PostsComponent,
    children: [
      {
        path: "",
        component: PostListingComponent,
      },
      {
        path: ":slug",
        component: PostDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [PostsComponent, PostListingComponent, PostDetailComponent],
  providers: [PostService],
  imports: [
    CommonModule,
    SharedPostModule,
    SidebarModule,
    RouterModule.forChild(routes),
  ],
})
export class PostsModule {}
