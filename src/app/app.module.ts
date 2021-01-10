import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsModule } from "./posts/posts.module";
import { CategoriesModule } from "./categories/categories.module";
import { HighlightService } from "./shared/services/highlight.service";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";
import { HomeModule } from "./home/home.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    AuthModule,
    HomeModule,
    HttpClientModule,
    PostsModule,
    CategoriesModule,
    AdminModule,
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent],
})
export class AppModule {}
