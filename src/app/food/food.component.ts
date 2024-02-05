import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'] // Use styleUrls instead of styleUrl
})
export class FoodComponent {
  

  foods = [
    { name: 'Crispy Corn', image: 'assets/images/crispycorn.jpeg', description: 'Delicious crispy corn with a perfect blend of spices.', price: 2.99 },
    { name: 'Kebabs', image: 'assets/images/kebabs.jpg', description: 'Mouth-watering kebabs grilled to perfection.', price: 2.99 },
    { name: 'Noodles', image: 'assets/images/noodles.jpeg', description: 'Tasty noodles cooked with fresh vegetables and sauces.', price: 2.99 },
    { name: 'Pasta', image: 'assets/images/pastas.jpg', description: 'Creamy pasta with a rich tomato sauce.', price: 2.99 },
    { name: 'Butter Chicken', image: 'assets/images/butterchicken.jpg', description: 'Succulent butter chicken curry served with naan.', price: 2.99 },
    { name: 'Paneer', image: 'assets/images/paneer.jpg', description: 'Paneer tikka masala with a flavorful gravy.', price: 2.99 },
    { name: 'Biryani', image: 'assets/images/biryani.jpg', description: 'Fragrant biryani with aromatic spices and tender meat.', price: 2.99 },
    { name: 'Pulao', image: 'assets/images/pulao.jpg', description: 'Vegetable pulao with basmati rice and assorted veggies.', price: 2.99 },
    { name: 'Fried Rice', image: 'assets/images/friedrice.jpg', description: 'Classic fried rice with a mix of vegetables and soy sauce.', price: 2.99 }
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


