import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminComponent } from "./admin.component";
import { RouterModule, Routes } from "@angular/router";
import { EditorModule } from "@tinymce/tinymce-angular";
import { TagInputModule } from 'ngx-chips';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddPostComponent } from "./add-post/add-post.component";
import { AllPostsComponent } from "./all-posts/all-posts.component";
import { UpdatePostComponent } from "./update-post/update-post.component";
import { ImageUploadModule } from "../shared/modules/image-upload/image-upload.module";
import { EditableModule } from "../shared/modules/editable/editable.module";
import { AuthGuard } from "../auth/shared/auth.guard";
import { MediaComponent } from "./media/media.component";
import { MediaService } from "./shared/media.service";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
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
      {
        path: "media",
        component: MediaComponent,
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
    MediaComponent,
  ],
  providers:[MediaService],
  imports: [
    CommonModule,
    FormsModule,
    ImageUploadModule,
    EditableModule,
    EditorModule,
    TagInputModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ],
})
export class AdminModule {}
