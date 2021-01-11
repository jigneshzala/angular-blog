import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PostCardComponent } from "./post-card/post-card.component";

@NgModule({
  declarations: [PostCardComponent],
  exports: [PostCardComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedPostModule {}
