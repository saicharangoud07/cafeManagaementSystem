import { Component } from '@angular/core';
import { CafeService } from '../cafe.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [CafeService]  // Corrected typo here
})
export class RegisterComponent {
  user: any = {
    email: '',
    name: '',
    password: '',
    number: '',
  };

  constructor(private userService: CafeService, private toastr: ToastrService,private router: Router) {}

  onSubmit() {
    // Validate the form before submitting
    if (!this.validateForm()) {
      return;
    }

    // Your existing registration logic
    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        // Display Toastr success message
        this.toastr.success('Registration successful!', 'Success', {
          timeOut: 3000, // Set the duration in milliseconds (e.g., 3000 for 3 seconds)
          closeButton: true,
          enableHtml: true,
          toastClass: 'toast-success',
          titleClass: 'toast-success-title',
          messageClass: 'toast-success-message'
        }).onHidden.subscribe(() => {
          // Navigation to home page after Toastr message is hidden
          // this.authService.setLoggedIn(true);
          this.router.navigate(['/login']);
        });
      },
      (error) => {
        console.error('Registration failed:', error);
        // Display Toastr error message
        this.toastr.error('Registration failed. Please try again.', 'Error');
      }
    );
  }

  // Additional validation logic
  validateForm(): boolean {
    if (!this.isValidEmail(this.user.email)) {
      // Display Toastr error message for invalid email
      this.toastr.error('Please enter a valid email.', 'Error');
      return false;
    }

    if (!this.isValidPassword(this.user.password)) {
      // Display Toastr error message for invalid password
      this.toastr.error('Password must be at least 8 characters long and include a combination of letters and numbers.', 'Error');
      return false;
    }

    if (!this.isValidNumber(this.user.number)) {
      // Display Toastr error message for invalid number
      this.toastr.error('Please enter a valid 10-digit number.', 'Error');
      return false;
    }

    return true;
  }

  // Validate email format
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate password format
  isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  // Validate number format
  isValidNumber(number: string): boolean {
    const numberRegex = /^[0-9]{10}$/;
    return numberRegex.test(number);
  }
}
