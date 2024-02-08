// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any = '';
  password: any = '';
  errorMessage: any = '';

  constructor(private router: Router) {}

  onSubmit(event: Event) {

    event.preventDefault(); 
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }
    this.router.navigate(['/product']);
    // Here, you can implement authentication logic, such as calling an authentication service
    // For demonstration purposes, let's simulate a successful login after a brief delay
  
  }

  onNavigateToProducts() {
    // Navigate to the 'products' route upon button click
    this.router.navigate(['/product']);
  }

}
