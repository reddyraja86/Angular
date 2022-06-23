import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName:String="";
  password:String="";

  @Output() loggedInUser = new EventEmitter<String>();

  onLogin(){
    alert(this.userName);
    this.loggedInUser.emit(this.userName);
  }

}
