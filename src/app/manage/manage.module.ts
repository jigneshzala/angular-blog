import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ManageComponent } from "./manage.component";
import { RouterModule, Routes } from "@angular/router";
import { ManagePostsComponent } from "./manage-posts/manage-posts.component";
import { PostNewComponent } from "./post-new/post-new.component";
import { EditorModule } from "@tinymce/tinymce-angular";
import { ImageUploadModule } from "../shared/modules/image-upload/image-upload.module";
import { PostEditComponent } from './post-edit/post-edit.component';
import { EditableModule } from "../shared/modules/editable/editable.module";

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
        path: "posts/:postId",
        component: PostEditComponent,
      },
      {
        path: "new",
        component: PostNewComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ManageComponent, ManagePostsComponent, PostNewComponent, PostEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    ImageUploadModule,
    EditableModule,
    RouterModule.forChild(routes),
  ],
})
export class ManageModule {}
