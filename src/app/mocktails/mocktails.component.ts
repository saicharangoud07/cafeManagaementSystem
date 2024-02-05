import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-mocktails',
  templateUrl: './mocktails.component.html',
  styleUrl: './mocktails.component.css'
})
export class MocktailsComponent {
  mocktails = [
    { name: 'Virgin Mojito', image: 'assets/images/virginmojito.jpg', description: 'A refreshing non-alcoholic drink made with lime, mint, and sugar.', price: 2.99 },
    { name: 'Strawberry Daiquiri', image: 'assets/images/strawberrydaiquiri.jpeg', description: 'A fruity mocktail with the sweet taste of strawberries.', price: 2.99 },
    { name: 'Arnold Palmer', image: 'assets/images/arnoldpalmer.jpg', description: 'A classic combination of iced tea and lemonade, perfect for a sunny day.', price: 2.99 },
    { name: 'Cranberry Mojito', image: 'assets/images/cranberrymojito.jpg', description: 'A tangy and sweet mocktail with cranberry, lime, and mint flavors.', price: 2.99 },
    { name: 'Blueberry Mojito', image: 'assets/images/blueberrymojito.jpeg', description: 'A vibrant blueberry-infused mocktail with a hint of mint.', price: 2.99 },
    { name: 'Roy Rogers', image: 'assets/images/royrogers.jpg', description: 'A classic mocktail made with cola, grenadine, and a maraschino cherry.', price: 2.99 },
    { name: 'Shirley Temple', image: 'assets/images/shirleytemple.webp', description: 'A sweet and fizzy mocktail with ginger ale, grenadine, and a cherry.', price: 2.99 },
    { name: 'Mango Mule', image: 'assets/images/mangomule.jpeg', description: 'A tropical mocktail featuring the refreshing flavors of mango and lime.', price: 2.99 },
    { name: 'Watermelon Mint', image: 'assets/images/watermelon mint.webp', description: 'A cooling mocktail combining the juiciness of watermelon with the freshness of mint.', price: 2.99 },
    // Add more mocktail items here
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
