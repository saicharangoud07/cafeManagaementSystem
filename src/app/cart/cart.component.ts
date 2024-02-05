import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total: number;
  emailId: any;
  cartItems: any[];

  constructor(private service: CartService, private router: Router, private customerService: CartService, private cdr: ChangeDetectorRef) {
    this.cartItems = [];
    this.total = 0;

    this.emailId = localStorage.getItem("emailId");
  }

  ngOnInit() {
    this.service.cartItems$.subscribe((cartItems) => {
      console.log('Received updated cart items:', cartItems);
      this.cartItems = cartItems;
      this.calculateTotal();
      this.detectChanges(); // Manually trigger change detection
    });
  }

  private detectChanges() {
    if (!(this.cdr as any)['destroyed']) {
      this.cdr.detectChanges();
    }
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => {
      const itemPrice = item.price || 0; // Change to price property
      const itemQuantity = item.quantity || 1;
      return sum + (itemPrice * itemQuantity);
    }, 0);
    console.log('Calculated total:', this.total);
  }

  checkOut() {
    localStorage.removeItem("cartProducts");
    this.cartItems = [];
    this.total = 0; // Reset total to 0
    alert("Thank You For Shopping With US");
  }

  getTotalPrice(): number {
    return this.total;
  }

  removeItem(item: any) {
    const index = this.cartItems.findIndex(cartItem => this.isEqual(cartItem, item));
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotal();
      this.detectChanges();
    }
  }
  
  private isEqual(obj1: any, obj2: any): boolean {
    // Implement custom equality check based on your object properties
    return obj1.id === obj2.id; // Change this based on your object structure
  }
  
  

  emptyCart() {
    this.cartItems = [];
    this.total = 0;
  }

  orderNow() {
    console.log('Order Now clicked');
    this.router.navigate(['/bill']);
  }
  
  increaseQuantity(item: any) {
    item.quantity += 1;
    this.calculateTotal();
    this.detectChanges();
  }
  
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.calculateTotal();
      this.detectChanges();
    }
  }
}
