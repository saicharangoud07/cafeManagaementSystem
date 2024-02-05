import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css'
})
export class CoffeeComponent {
 

  
   coffees = [
    { name: 'Espresso', image: 'assets/images/espresso.jpeg', description: 'Intense and concentrated coffee shot, perfect for the bold coffee lover.', price: 2.99 },
    { name: 'Cappuccino', image: 'assets/images/cappuccino.jpeg', description: 'Rich espresso combined with steamed milk and topped with frothy foam.', price: 2.99 },
    { name: 'Cafe Mocha', image: 'assets/images/mocha.png', description: 'Espresso, hot chocolate, and steamed milk topped with whipped cream.', price: 2.99 },
    { name: 'Americano', image: 'assets/images/americano.webp', description: 'Diluted espresso with hot water, providing a strong and smooth flavor.', price: 2.99 },
    { name: 'Frappuccino', image: 'assets/images/frappucino.webp', description: 'Blended coffee beverage with ice and various flavors, perfect for a refreshing treat.', price: 2.99 },
    { name: 'Iced Latte', image: 'assets/images/icedlattee.jpeg', description: 'Espresso mixed with chilled milk, served over ice for a delightful cool drink.', price: 2.99 },
    { name: 'Caramel Macchiato', image: 'assets/images/caramelmacchiato.jpg', description: 'Espresso with steamed milk and vanilla syrup, marked with caramel drizzle.', price: 2.99 },
    { name: 'Cold Brew', image: 'assets/images/coldbrew.jpg', description: 'Smooth and cold steeped coffee, offering a bold and less acidic flavor.', price: 2.99 },
    { name: 'Black Coffee', image: 'assets/images/blackcoffee.jpg', description: 'Classic black coffee brewed to perfection, simple and strong.', price: 2.99 },
];

showSuccessMessage: boolean = false;
constructor(private router: Router, private cartService: CartService) { }

addToCart(coffee: any) {
  this.cartService.addToCart(coffee);
 
  this.showSuccessMessage = true;
  setTimeout(() => {
    this.showSuccessMessage = false;
  }, 3000);
}

}