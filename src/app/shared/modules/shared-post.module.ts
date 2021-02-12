import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PostCardComponent } from "./post-card/post-card.component";
import { VerticlePostCardComponent } from './verticle-post-card/verticle-post-card.component';

@NgModule({
  declarations: [PostCardComponent, VerticlePostCardComponent],
  exports: [PostCardComponent,VerticlePostCardComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedPostModule {}
