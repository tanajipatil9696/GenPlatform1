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

  onSubmit(): void {
    // Perform form submission logic here
    console.log("onSubmit=============")
    // Navigate to the desired route after form submission
    this.router.navigate(['product']); // Use navigateByUrl for navigating to a specific URL
    // Or use this.router.navigate(['/other-route']); // Use navigate for navigating to a route defined in your Angular routing configuration
  }
  
}
