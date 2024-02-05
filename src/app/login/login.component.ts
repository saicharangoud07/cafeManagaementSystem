import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CafeService } from '../cafe.service';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CafeService],
})
export class LoginComponent implements OnInit {
  emailId: string = '';
  password: string = '';
  captcha: string = '';
  captchaInput: string = '';

  constructor(
    private router: Router,
    private service: CafeService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  showPassword: boolean = false;
  confirmPassword: string = '';

  ngOnInit(): void {
    this.emailId = '';
    this.password = '';
    this.generateCaptcha();
  }

  async loginSubmit() {
    // Validate the form before submitting
    if (!this.validateForm()) {
      return;
    }
  
    try {
      console.log(this.emailId + ' ' + this.password);
      const data = await this.service.custLogin({ emailId: this.emailId, password: this.password }).toPromise();
      console.log('Full Service Response:', data);
  
      if (data) {
        if (this.emailId === 'admin@gmail.com' && this.password === 'admin') {
          this.toastr.success('Admin login successful!');
          this.router.navigate(['/admin']);
        } else {
          this.toastr.success('User login successful!', 'Success', {
            timeOut: 1500, // Set the duration in milliseconds (e.g., 3000 for 3 seconds)
            closeButton: true,
            enableHtml: true,
            toastClass: 'toast-success',
            titleClass: 'toast-success-title',
            messageClass: 'toast-success-message'
          }).onHidden.subscribe(() => {
            // Navigation to home page after Toastr message is hidden
            this.authService.setLoggedIn(true);
            this.router.navigate(['/home1']);
          });
      }
      } else {
        // Display Toastr error message for invalid credentials
        this.toastr.error('Login failed. Invalid credentials.', 'Error');
      }
    } catch (error) {
      console.error('Service Error:', error);
      // Display Toastr error message for service failure
      this.toastr.error('Login failed. Please try again.', 'Error');
    }
  }
  

  // Additional validation logic
  validateForm(): boolean {
    if (!this.isValidEmail(this.emailId)) {
      // Display Toastr error message for invalid email
      this.toastr.error('Please enter a valid email.', 'Error');
      return false;
    }

    if (this.password.trim().length === 0) {
      // Display Toastr error message for empty password
      this.toastr.error('Please enter a password.', 'Error');
      return false;
    }

    if (!this.isValidCaptcha(this.captchaInput)) {
      // Display Toastr error message for incorrect captcha
      this.toastr.error('Incorrect captcha. Please try again.', 'Error');
      return false;
    }

    return true;
  }

  // Validate email format
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate captcha
  isValidCaptcha(captchaInput: string): boolean {
    return captchaInput === this.captcha;
  }

  // Generate random captcha
  generateCaptcha(): void {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6;
    this.captcha = Array.from({ length }, () =>
      possibleChars[Math.floor(Math.random() * possibleChars.length)]
    ).join('');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  forgotPassword() {
    // Implement your logic for handling the "Forgot Password" action
    // For example, you can navigate to a password reset page
    this.router.navigate(['/forgot']);
  }
}