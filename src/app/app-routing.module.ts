import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { GuestGuard } from "./auth/shared/auth.guard";
import { TermsComponent } from "./terms/terms.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ContactComponent } from "./contact/contact.component";
import { VerificationComponent } from "./verification/verification.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "posts",
    loadChildren: () =>
      import("./posts/posts.module").then((m) => m.PostsModule),
  },
  {
    path: "category",
    loadChildren: () =>
      import("./categories/categories.module").then((m) => m.CategoriesModule),
  },
  {
    path: "tag",
    loadChildren: () => import("./tags/tags.module").then((m) => m.TagsModule),
  },
  {
    path: "snippet",
    loadChildren: () =>
      import("./snippets/snippets.module").then((m) => m.SnippetsModule),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "verify/:token",
    component: VerificationComponent,
  },
  {
    path: "terms",
    component: TermsComponent,
  },
  {
    path: "privacy",
    component: PrivacyComponent,
  },
  { path: "login", component: LoginComponent, canActivate: [GuestGuard] },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
  declarations: [
    TermsComponent,
    PrivacyComponent,
    PageNotFoundComponent,
    VerificationComponent,
  ],
})
export class AppRoutingModule {}
