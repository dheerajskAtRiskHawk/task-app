import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isShowError?:boolean = false;

  constructor(private router: Router){}

  onLogin() {
    // TODO: Implement your authentication logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    if(this.username=="john.doe" && this.password=="secret"){
      // navigate to task list
      // this.router.navigateByUrl("/tasks/new");
      this.router.navigate(['tasks',1])
    }else{
      this.isShowError = true;
      // show error message
    }
  }
}
