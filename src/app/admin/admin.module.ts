import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminComponent } from "./admin.component";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../auth/shared/auth.guard";
import { MediaService } from "./shared/media.service";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "manage",
        loadChildren: () =>
          import("./manage/manage.module").then((m) => m.ManageModule),
      },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent],
  providers: [MediaService],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
