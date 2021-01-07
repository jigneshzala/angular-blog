import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";
import { PostsModule } from "./posts/posts.module";
import { ManageModule } from "./manage/manage.module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    PostsModule,
    ManageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
