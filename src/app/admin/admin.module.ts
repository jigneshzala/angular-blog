import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminComponent } from "./admin.component";
import { RouterModule, Routes } from "@angular/router";
import { EditorModule } from "@tinymce/tinymce-angular";
import { AddPostComponent } from "./add-post/add-post.component";
import { AllPostsComponent } from "./all-posts/all-posts.component";
import { UpdatePostComponent } from "./update-post/update-post.component";
import { ImageUploadModule } from "../shared/modules/image-upload/image-upload.module";
import { EditableModule } from "../shared/modules/editable/editable.module";
import { AuthGuard } from "../auth/shared/auth.guard";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "posts", component: AllPostsComponent, canActivate: [AuthGuard] },
      {
        path: "add-post",
        component: AddPostComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "update-post/:id",
        component: UpdatePostComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    AddPostComponent,
    AllPostsComponent,
    UpdatePostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImageUploadModule,
    EditableModule,
    EditorModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminModule {}
