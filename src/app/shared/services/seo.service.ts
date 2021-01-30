import { Injectable } from "@angular/core";
import { Meta, Title } from '@angular/platform-browser';


@Injectable({
  providedIn: "root",
})
export class SeoService {
  // constructor(private title: Title, private meta: Meta) {}
   constructor( private _meta: Meta, private _title : Title) {}

  updateTitle(title: string) {
    this._title.setTitle(title);
  }

  updateDescription(desc: string) {
    this._meta.addTag({ name: 'description', content: desc })

  }
  
  updateKeyword(keywords: string) {
    this._meta.addTag({ name: 'keywords', content: keywords })
  }
  
  updateRobots(str: string) {
    this._meta.addTag({ name: 'robots', content: str })
  }
}