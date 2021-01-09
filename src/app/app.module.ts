import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";
import { PostsModule } from "./posts/posts.module";
import { CategoriesModule } from "./categories/categories.module";
import { HighlightService } from "./shared/services/highlight.service";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    HomeModule,
    PostsModule,
    CategoriesModule,
    AdminModule,
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent],
})
export class AppModule {}
