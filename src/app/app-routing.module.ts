import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { GuestGuard } from "./auth/shared/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
/*   {
    path: "admin",
    redirectTo: "/admin",
    pathMatch: "full",
  }, */
  { path: "login", component: LoginComponent,canActivate: [GuestGuard ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
