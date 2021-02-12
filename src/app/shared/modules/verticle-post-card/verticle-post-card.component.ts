import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-verticle-post-card',
  templateUrl: './verticle-post-card.component.html'
})
export class VerticlePostCardComponent implements OnInit {

  @Input('posts')posts:any = []
  @Input('type')type:any;
  constructor() { }

  ngOnInit(): void {
  }

}
