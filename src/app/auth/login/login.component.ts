import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    // TODO: Implement your authentication logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
