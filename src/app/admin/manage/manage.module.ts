import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EditorModule } from "@tinymce/tinymce-angular";
import { TagInputModule } from "ngx-chips";
import { ModalModule } from "ngx-bootstrap/modal";
import { ImageUploadModule } from "../../shared/modules/image-upload/image-upload.module";
import { EditableModule } from "../../shared/modules/editable/editable.module";
import { UiSwitchModule } from "ngx-toggle-switch";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { ManageComponent } from "./manage.component";
import { AllSnippetComponent } from "./snippets/all-snippet/all-snippet.component";
import { AddSnippetComponent } from "./snippets/add-snippet/add-snippet.component";
import { UpdateSnippetComponent } from "./snippets/update-snippet/update-snippet.component";
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { AllPostsComponent } from "./posts/all-posts/all-posts.component";
import { UpdatePostComponent } from "./posts/update-post/update-post.component";
import { MediaComponent } from "./media/media.component";
import { AddPageComponent } from "./pages/add-page/add-page.component";
import { UpdatePageComponent } from "./pages/update-page/update-page.component";
import { AllPageComponent } from "./pages/all-page/all-page.component";
import { AddDealComponent } from "./deals/add-deal/add-deal.component";
import { AllDealComponent } from "./deals/all-deal/all-deal.component";
import { UpdateDealComponent } from "./deals/update-deal/update-deal.component";
import { AllQuestionComponent } from "./questions/all-question/all-question.component";
import { AddQuestionComponent } from "./questions/add-question/add-question.component";
import { UpdateQuestionComponent } from "./questions/update-question/update-question.component";

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
      {
        path: "questions",
        component: AllQuestionComponent,
      },
      {
        path: "add-question",
        component: AddQuestionComponent,
      },
      {
        path: "update-question/:slug",
        component: UpdateQuestionComponent,
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
      {
        path: "pages",
        component: AllPageComponent,
      },
      {
        path: "add-page",
        component: AddPageComponent,
      },
      {
        path: "update-page/:id",
        component: UpdatePageComponent,
      },
      {
        path: "deals",
        component: AllDealComponent,
      },
      {
        path: "add-deal",
        component: AddDealComponent,
      },
      {
        path: "update-deal/:id",
        component: UpdateDealComponent,
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
    AllQuestionComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    AddPageComponent,
    UpdatePageComponent,
    AllPageComponent,
    AllDealComponent,
    AddDealComponent,
    UpdateDealComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImageUploadModule,
    EditableModule,
    UiSwitchModule,
    EditorModule,
    TagInputModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ],
})
export class ManageModule {}
