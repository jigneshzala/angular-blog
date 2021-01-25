import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EditorModule } from "@tinymce/tinymce-angular";
import { ManageComponent } from "./manage.component";
import { AllSnippetComponent } from "./snippets/all-snippet/all-snippet.component";
import { AddSnippetComponent } from "./snippets/add-snippet/add-snippet.component";
import { UpdateSnippetComponent } from "./snippets/update-snippet/update-snippet.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "manage",
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
    ],
  },
];

@NgModule({
  declarations: [ManageComponent,AllSnippetComponent,AddSnippetComponent,UpdateSnippetComponent],
  imports: [CommonModule, FormsModule, EditorModule,RouterModule.forChild(routes)],
})
export class ManageModule {}
