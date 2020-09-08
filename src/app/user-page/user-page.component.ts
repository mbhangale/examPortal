import { Component, OnInit } from '@angular/core';
import { HttpdataService } from '../httpdata.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  allotedexamstouser = [];
  userresponses=[];
  questionsForExam = [];
  selectedExam: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  currentAnswer: string;

  constructor(private myservice: HttpdataService) { }

  ngOnInit(): void {
    this.myservice.getAllotedExamsForUser('mayuresh').subscribe((data)=> {
      this.allotedexamstouser = Array.from(Object.keys(data), k=>data[k]);
    });
  }

  getQuestionsForExam(){
    this.myservice.getExamQuestionsList(this.selectedExam).subscribe((data)=> {
      this.questionsForExam = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.questionsForExam);
    });
  }

  submitAnswerForCurrentQuestion(){
    this.userresponses.push(this.currentAnswer);
    this.currentAnswer=undefined;

  }

}
