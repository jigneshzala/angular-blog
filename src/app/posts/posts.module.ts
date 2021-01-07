import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsComponent } from "./posts.component";
import { PostListingComponent } from "./post-listing/post-listing.component";
import { RouterModule, Routes } from "@angular/router";
import { PostService } from "./shared/post.service";
const routes: Routes = [
  {
    path: "posts",
    component: PostsComponent,
    children: [
      {
        path: "",
        component: PostListingComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [PostsComponent, PostListingComponent],
  providers: [PostService],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PostsModule {}
