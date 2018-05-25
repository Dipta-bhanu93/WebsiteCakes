import { Component } from '@angular/core';

@Component({
    selector: 'login',
    styleUrls: ['src/styles.css'],
    templateUrl: 'app/login.component.html',
    
})
export class LoginComponent {
   login = function (email: any, pass: any){
     console.log(this.email,this.pass);
   }
}