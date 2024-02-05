import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {
  userEmail: string = '';

  onSubmit(): void {
    // Implement logic to handle the forgot password functionality
    // For example, send a password reset email to the provided email address
    alert('Email submitted');
  }
}
