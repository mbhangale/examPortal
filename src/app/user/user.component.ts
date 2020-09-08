import { Component, OnInit } from '@angular/core';
import { HttpdataService } from '../httpdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private myservice: HttpdataService) { }

  userslist = [];
  examslist = [];
  selected = "none";
  allotedexamstouser = [];

  ngOnInit(): void {
    this.myservice.getUsersList().subscribe((data)=> {
      this.userslist = Array.from(Object.keys(data), k=>data[k]);
    });

    this.myservice.getExamList().subscribe((data)=> {
      this.examslist = Array.from(Object.keys(data), k=>data[k]);
    });


  }

  getExamsForUser(user){
    this.myservice.getAllotedExamsForUser(user).subscribe((data)=> {
      this.allotedexamstouser = Array.from(Object.keys(data), k=>data[k]);
    });
    window.location.reload;

  }

  addExamToUser(user, exam){
    this.myservice.addExamForUser(user, exam).subscribe((data)=> {
      window.location.reload;
    });

  }

  deleteExamForUser(user, exam){
    this.myservice.deleteExamForUser(user, exam).subscribe((data)=> {
      window.location.reload();
    });
  }

 

}
