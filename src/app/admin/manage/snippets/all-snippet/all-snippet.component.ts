import { Component, OnInit } from '@angular/core';
import { SnippetService } from 'src/app/snippets/shared/snippet.service';

@Component({
  selector: 'app-all-snippet',
  templateUrl: './all-snippet.component.html',
  styleUrls: ['./all-snippet.component.scss']
})
export class AllSnippetComponent implements OnInit {

  constructor(private snippetService:SnippetService) { }

  posts: any = [];
  ngOnInit() {
    this.snippetService.getSnippets().subscribe((response) => {
     this.posts = response["data"]["snippets"];
    });
  }

  deleteSnippet(id) {
    this.snippetService.deleteSnippet(id).subscribe((response) => {
      alert("snippet deleted");
    });
  }
}
