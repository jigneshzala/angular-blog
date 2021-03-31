import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/questions/shared/question.service';

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.scss']
})
export class AllQuestionComponent implements OnInit {

  constructor(private questionService:QuestionService) { }

  posts: any = [];
  ngOnInit() {
    this.questionService.getQuestions().subscribe((response) => {
     this.posts = response["data"]["questions"];
    });
  }

  deleteQuestion(id) {
    this.questionService.deleteQuestion(id).subscribe((response) => {
      alert("question deleted");
    });
  }
}
