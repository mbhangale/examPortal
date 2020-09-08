import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpdataService {
  postdata = '{ "empid":1, "empname":mayuresh, "salary":12345 }';
  questiondata = '{ "empid":1, "empname":mayuresh, "salary":12345 }';
  constructor(private http: HttpClient) {}
  
  postHttpData(username, password) {
    this.postdata='{ "username": "'+ username +'", "password": "'+ password +'" }';
    return this.http.post('http://localhost:8080/registerUser', this.postdata,  
    {headers : new HttpHeaders({ 'Content-Type': 'application/json',accept: 'text/plain' }),
    responseType:'text'});
  
  }

  getExamList(){
    return this.http.get('http://localhost:8080/displayAllExams');
  }
  getExamQuestionsList(exam){
    return this.http.post('http://localhost:8080/displayQuestionsForExam', '{ "examname": "'+ exam +'" }',  
    {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  addQuestioninExam(data){
    console.log(data);
    return this.http.post('http://localhost:8080/addQuestioninExam', data,  
    {headers : new HttpHeaders({ 'Content-Type': 'application/json',accept: 'text/plain' }),
    responseType:'text'});
  }

  deleteQuestionFromExam(data){
    return this.http.post('http://localhost:8080/deleteQuestion', data,  
    {headers : new HttpHeaders({ 'Content-Type': 'application/json',accept: 'text/plain' }),
    responseType:'text'});
  }

  // Observable type post delete request to server
  deleteExamFromServer(data){
   return this.http.post<string>("http://localhost:8080/deleteExam/",data).pipe(
      map((data:string)=>{
        return data;
      }),catchError(error =>{
        return throwError("Data not loaded properly......");
      })
    );
  }

  addNewExam(data){
    console.log(data);
    return this.http.post('http://localhost:8080/addExam', '{ "examname": "'+ data.newexam +'" }',  
    {headers : new HttpHeaders({ 'Content-Type': 'application/json',accept: 'text/plain' }),
    responseType:'text'});
  }

  getUsersList(){
    return this.http.get('http://localhost:8080/listUsers');
  }

  getAllotedExamsForUser(data){

    return this.http.post('http://localhost:8080/displayExamForUser', 
    '{ "userid": "'+ '1234' +'", "username": "'+ data +'", "password": "'+ '1234' +'" }',  
    {headers : new HttpHeaders({ 'Content-Type': 'application/json'})});
  }

  addExamForUser(user, exam){
    return this.http.post('http://localhost:8080/adduserexam', 
    '{ "username": "'+ user +'", "examname": "'+ exam.examname +'"}',    
    {headers : new HttpHeaders({ 'Content-Type': 'application/json',accept: 'text/plain' }),
    responseType:'text'});
  }

  deleteExamForUser(user, exam){
    return this.http.post('http://localhost:8080/deleteuserexam', 
    '{ "username": "'+ user +'", "examname": "'+ exam.examname +'"}',    
    {headers : new HttpHeaders({ 'Content-Type': 'application/json',accept: 'text/plain' }),
    responseType:'text'});
  }

}
