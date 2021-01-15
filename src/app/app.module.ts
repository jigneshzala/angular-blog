import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HighlightService } from "./shared/services/highlight.service";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";
import { HomeModule } from "./home/home.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PostsModule } from "./posts/posts.module";
import { CategoriesModule } from "./categories/categories.module";
import { TokenInterceptor } from "./auth/shared/token.interceptor";
import { LocalStorageService } from "./shared/services/local-storage.service";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
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
  providers: [
    HighlightService,
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
