import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']  // Corrected property name to styleUrls
})
export class SnacksComponent {
  snacks = [
    { name: 'French Fries', image: 'assets/images/frenchfries.jpeg', description: 'Crispy and golden French fries seasoned to perfection.', price: 199.99 },
    { name: 'Croissant', image: 'assets/images/croissant.jpg', description: 'A flaky and buttery croissant, a classic French pastry.', price: 249.99 },
    { name: 'Ham Sandwich', image: 'assets/images/Hamsandwich.jpg', description: 'A hearty sandwich with delicious ham, fresh veggies, and condiments.', price: 299.99 },
    { name: 'Tacos', image: 'assets/images/tacos.jpg', description: 'Savory tacos filled with your choice of meat, veggies, and toppings.', price: 249.99 },
    { name: 'Mozzarella Sticks', image: 'assets/images/mozzarellasticks.jpg', description: 'Crunchy and cheesy mozzarella sticks, a delightful snack.', price: 199.99 },
    { name: 'Potato Wedges', image: 'assets/images/potatowedges.jpeg', description: 'Seasoned potato wedges, a tasty and satisfying side dish.', price: 149.99 },
    { name: 'Burger', image: 'assets/images/burger.jpg', description: 'Juicy and flavorful burger with your favorite toppings and condiments.', price: 349.99 },
    { name: 'Pizza', image: 'assets/images/1.jpg', description: 'Delicious pizza with a variety of toppings and gooey melted cheese.', price: 399.99 },
    { name: 'Chicken Wrap', image: 'assets/images/ChickenWrap.webp', description: 'A flavorful wrap filled with grilled chicken and fresh ingredients.', price: 299.99 },
    // Add more snacks items here
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
