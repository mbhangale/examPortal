import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpdataService } from '../httpdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  username=new FormControl()
  password=new FormControl()

gender;

  constructor(private myservice: HttpdataService) { }

  ngOnInit(): void {
  }

  OnRegister(){
    this.myservice.postHttpData(this.username.value, this.password.value).subscribe((data)=>{
      console.log(data);
  });
  }
}
