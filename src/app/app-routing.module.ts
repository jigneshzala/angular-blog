import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { GuestGuard } from "./auth/shared/auth.guard";
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path:"terms",
    component:TermsComponent
  },
  {
    path:"privacy",
    component:PrivacyComponent
  },
  /*   {
    path: "admin",
    redirectTo: "/admin",
    pathMatch: "full",
  }, */
  { path: "login", component: LoginComponent, canActivate: [GuestGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
  declarations: [TermsComponent, PrivacyComponent],
})
export class AppRoutingModule {}
