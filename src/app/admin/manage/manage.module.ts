import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EditorModule } from "@tinymce/tinymce-angular";
import { TagInputModule } from "ngx-chips";
import { ModalModule } from "ngx-bootstrap/modal";
import { ImageUploadModule } from "../../shared/modules/image-upload/image-upload.module";
import { EditableModule } from "../../shared/modules/editable/editable.module";
import { UiSwitchModule } from 'ngx-toggle-switch';


import { ManageComponent } from "./manage.component";
import { AllSnippetComponent } from "./snippets/all-snippet/all-snippet.component";
import { AddSnippetComponent } from "./snippets/add-snippet/add-snippet.component";
import { UpdateSnippetComponent } from "./snippets/update-snippet/update-snippet.component";
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { AllPostsComponent } from "./posts/all-posts/all-posts.component";
import { UpdatePostComponent } from "./posts/update-post/update-post.component";
import { MediaComponent } from "./media/media.component";

const routes: Routes = [
  {
    path: "",
    component: ManageComponent,
    children: [
      {
        path: "snippets",
        component: AllSnippetComponent,
      },
      {
        path: "add-snippet",
        component: AddSnippetComponent,
      },
      {
        path: "update-snippet/:slug",
        component: UpdateSnippetComponent,
      },
      { path: "posts", component: AllPostsComponent },
      {
        path: "add-post",
        component: AddPostComponent,
      },
      {
        path: "update-post/:id",
        component: UpdatePostComponent,
      },
      {
        path: "media",
        component: MediaComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ManageComponent,
    AddPostComponent,
    AllPostsComponent,
    UpdatePostComponent,
    MediaComponent,
    AllSnippetComponent,
    AddSnippetComponent,
    UpdateSnippetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImageUploadModule,
    EditableModule,
    UiSwitchModule,
    EditorModule,
    TagInputModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ],
})
export class ManageModule {}
