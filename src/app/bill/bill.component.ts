// bill.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../orderservice.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  orderForm!: FormGroup;
  apiUrl = 'http://localhost:8080'; // Update with your actual backend API URL

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private orderService: OrderService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      paymentMethod: ['', Validators.required],
    });
  }

  placeOrder(): void {
    if (this.orderForm.valid) {
      const orderDetails = this.orderForm.value;

      // Update order details using the OrderService
      this.orderService.updateOrderDetails(orderDetails);

      // Make the HTTP request directly
      this.http.post(`${this.apiUrl}/orders/createOrder`, orderDetails).subscribe(
        (response) => {
          console.log('Order placed successfully:', response);
          alert('Order placed successfully!'); // Display browser alert
          this.router.navigate(['/orderreceipt']);
        },
        (error) => {
          console.error('Failed to place order:', error);
          alert('Failed to place order. Please try again.'); // Display browser alert
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
