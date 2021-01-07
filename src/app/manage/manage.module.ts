import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ManageComponent } from "./manage.component";
import { RouterModule, Routes } from "@angular/router";
import { ManagePostsComponent } from "./manage-posts/manage-posts.component";
import { PostNewComponent } from "./post-new/post-new.component";

const routes: Routes = [
  {
    path: "manage",
    component: ManageComponent,
    children: [
      {
        path: "posts",
        component: ManagePostsComponent,
      },
      {
        path: "new",
        component: PostNewComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ManageComponent, ManagePostsComponent, PostNewComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class ManageModule {}
