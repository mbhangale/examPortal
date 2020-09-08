import { Component, OnInit, Inject } from '@angular/core';
import { HttpdataService } from '../httpdata.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Observable, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

export interface DialogData {
  examname: string;
  question: string;
  option1: string;
  option2: string;
  option3: string,
  option4: string;
  correctanswer: string;

}

export interface DialogForExam {
  newexam: string;
}

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})


export class AdminpageComponent implements OnInit {

  availableExams;
  questionsForSelectedExam = [];
  panelOpenState = false;
  examname: string = "";
  newexam: string = "";
  question: string = "question";
  option1: string = "option1";
  option2: string = "option2";
  option3: string = "option3";
  option4: string = "option4";
  correctanswer: string = "correctanswer ";


  constructor(
    private myservice: HttpdataService, 
    public dialog: MatDialog,
    public http: HttpClient) { 
  }

  openDialog(exam):  void {
    this.examname=exam;
    const dialogRef = this.dialog.open(AdminpageComponentDialog, {
      width: '550px',
      height: '800px',
      data: {examname: this.examname, question: this.question, option1: this.option1, option2: this.option2, 
        option3: this.option3, option4: this.option4}
    });

    dialogRef.afterClosed().subscribe(result => {
      result.examname = this.examname;
      var temp = this.myservice.addQuestioninExam(result).subscribe((data)=>{
      });
      window.location.reload();
      console.log(temp);
    });
  }

  openDialogForExam(): void{
    const dialogRef = this.dialog.open(AdminpageComponentDialogForExam
      , {
      width: '550px',
      height: '240px',
      data:{newexam: this.newexam}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=null || result!=""){
        var temp = this.myservice.addNewExam(result).subscribe((data)=>{
        });
        console.log(temp);
        window.location.reload();
      }
    });
  }

  ngOnInit(): void {
    this.myservice.getExamList().subscribe((data)=> {
      this.availableExams = Array.from(Object.keys(data), k=>data[k]);
    });
  }
  getQuestionsForExam(exam){
    this.examname = exam;
    this.myservice.getExamQuestionsList(exam).subscribe((data)=> {
      this.questionsForSelectedExam = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.questionsForSelectedExam);
    });
  }

  deleteQuestion(quest){
    const dialogRef = this.dialog.open(AdminpageComponentAreyousure, {
      width: '550px',
      height: '180px',
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result==true){
        var temp = this.myservice.deleteQuestionFromExam(quest).subscribe((data)=>{
        });
        console.log(temp);
        location.reload();
      }
    });
  }

  deleteExam(exam){
    console.log("sddsfd"+exam.examname);
    const dialogRf = this.dialog.open(AdminpageComponentAreyousure, {
      width: '550px',
      height: '180px',
    });

    dialogRf.afterClosed().subscribe(result => {
      
      if(result==true){
        var temp = this.myservice.deleteExamFromServer(exam).subscribe((data)=>{
        });
        console.log(temp);
        location.reload();
      }
    });
  }

  

}

@Component({
  selector: 'adminpage.component.dialog',
  templateUrl: 'adminpage.component.dialog.html',
})
export class AdminpageComponentDialog{

  constructor(
    public dialogRef: MatDialogRef<AdminpageComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'adminpage.component.areyousure',
  templateUrl: 'adminpage.component.areyousure.html',
})
export class AdminpageComponentAreyousure{

  constructor(
    public dialogRef: MatDialogRef<AdminpageComponentAreyousure>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'adminpage.component.dialogforexam',
  templateUrl: 'adminpage.component.dialogforexam.html',
})
export class AdminpageComponentDialogForExam{
  constructor(
    public dialogRef: MatDialogRef<AdminpageComponentDialogForExam>,
    @Inject(MAT_DIALOG_DATA) public data: DialogForExam) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}



