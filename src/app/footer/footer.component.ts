import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  foods = [
    // Your food items go here
  ];

  constructor(private cartService: CartService) {}

  addToCart(food: any): void {
    this.cartService.addToCart(food);
  }

  buyItem(food: any): void {
    // Implement your logic for buying the item here
    console.log(`Bought ${food.name}.`);
  }
  scrollToFooter(): void {
    const element = document.getElementById('footerSection');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
