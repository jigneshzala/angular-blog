import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
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
import { TagsModule } from "./tags/tags.module";
import { TokenInterceptor } from "./auth/shared/token.interceptor";
import { LocalStorageService } from "./shared/services/local-storage.service";
import { SnippetsModule } from "./snippets/snippets.module";
import { ManageModule } from "./admin/manage/manage.module";
import { AdsenseModule } from "ng2-adsense";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { SeoService } from "./shared/services/seo.service";
import { UserService } from "./admin/manage/users/shared/user.service";
import { ContactComponent } from "./contact/contact.component";
import { ResourcesModule } from "./resources/resources.module";
import { DealsComponent } from "./deals/deals.component";
import { DealService } from "./admin/manage/deals/shared/deal.service";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent,ContactComponent,DealsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
    PostsModule,
    SnippetsModule,
    CategoriesModule,
    TagsModule,
    ManageModule,
    AdminModule,
    ResourcesModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5104133742493207',
      adSlot:9563129712
    }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [
    HighlightService,
    LocalStorageService,
    SeoService,
    DealService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
