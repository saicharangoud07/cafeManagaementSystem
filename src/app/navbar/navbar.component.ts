import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  // Function to handle login form submission
  loginUser() {
    // Implement your login logic here
    console.log('Login form submitted');
  }

  // Function to handle registration form submission
  registerUser() {
    // Implement your registration logic here
    console.log('Registration form submitted');
  }

}
