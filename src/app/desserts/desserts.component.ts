import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.css'
})
export class DessertsComponent {
  
  desserts = [
    { name: 'Chocolate Cake', image: 'assets/images/chocolatecake.webp', description: 'Indulge in the rich and moist chocolate cake, a perfect treat for chocolate lovers.', price: 2.99 },
    { name: 'Raspberry Mousse', image: 'assets/images/raspberrymousse.jpg', description: 'A delightful combination of fluffy mousse with the sweet and tangy flavor of fresh raspberries.', price: 2.99 },
    { name: 'Mango Tart', image: 'assets/images/mangotart.jpg', description: 'Experience the tropical delight with our mango tart, featuring fresh mangoes on a buttery crust.', price: 2.99 },
    { name: 'Vanilla Ice Cream', image: 'assets/images/vanillaicecream.jpg', description: 'Classic and creamy vanilla ice cream, a timeless dessert for a sweet and simple pleasure.', price: 2.99 },
    { name: 'Matcha Cake', image: 'assets/images/matchacake.jpeg', description: 'Enjoy the unique and earthy flavor of matcha in our delicious matcha cake, a true green tea delight.', price: 2.99 },
    { name: 'Custard Pudding', image: 'assets/images/custardpudding.jpg', description: 'Savor the velvety smoothness of our custard pudding, a luscious and comforting dessert.', price: 2.99 },
    { name: 'Brownie', image: 'assets/images/brownie.jpg', description: 'Indulge your chocolate cravings with our fudgy and decadent brownie, a perfect treat for any occasion.', price: 2.99 },
    { name: 'Cheesecake', image: 'assets/images/cheesecake.jpg', description: 'Delight in the rich and creamy goodness of our cheesecake, a heavenly dessert for cheesecake enthusiasts.', price: 2.99 },
    { name: 'Cupcakes', image: 'assets/images/cupcake.webp', description: 'A collection of delightful cupcakes, each with its unique flavor and topped with delicious frosting.', price: 2.99 },
    // Add more dessert items here
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

