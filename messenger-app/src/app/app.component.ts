import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'messenger-app';

  login:boolean=true;
  loggedUser:String ="";
  changeLogin(){
    this.login=!this.login;
  }
  //Event called from Login Component
  getLoggedInuserName(data:String){
    alert(data);
    this.loggedUser=data;
  }
}
