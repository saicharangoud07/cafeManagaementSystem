import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  username: any;
  loginStatus: any;
  isUserLogged: any;
  cartItems: any;
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  orderDetails: any; // Change from private to public
   totalAmount: number = 0; // Keep this private if you want, but provide a public method to access it


  constructor(private http: HttpClient) {
    this.loginStatus = false;
    this.isUserLogged = new BehaviorSubject<boolean>(false);
    this.cartItems = [];
  }
 
  getTotalAmount(): number {
    return this.totalAmount;
  }
  setOrderDetails(details: any) {
    this.orderDetails = details;
  }

  getOrderDetails() {
    return this.orderDetails;
  }
  addToCart(item: any) {
    const existingItemIndex = this.cartItems.findIndex((cartItem: any) => cartItem.prodName === item.prodName);
  
    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      this.cartItems[existingItemIndex].quantity = item.quantity;
    } else {
      // If the item is not in the cart, add it
      this.cartItems.push(item);
    }
  
    console.log('Updated cartItems:', this.cartItems);
    this.cartItemsSubject.next([...this.cartItems]);
  
    // Recalculate and update total amount when cart items change
    this.updateTotalAmount();
  }
  
  private updateTotalAmount() {
    // Calculate total amount based on your logic
    const totalAmount = this.cartItems.reduce((sum: number, item: any) => {
      const itemPrice = item.prodPrice || 0;
      const itemQuantity = item.quantity || 1;
      return sum + (itemPrice * itemQuantity);
    }, 0);
  
    // Set the total amount in the service
    this.setTotalAmount(totalAmount);
    console.log('Updated total amount:', totalAmount);
  }
  

  getIsUserLoggedStatus(): Observable<boolean> {
    return this.isUserLogged.asObservable();
  }

  getLoginStatus(): any {
    return this.loginStatus;
  }

  setLoginStatus() {
    this.loginStatus = true;
    this.isUserLogged.next(true);
  }

  setLogoutStatus() {
    this.loginStatus = false;
    this.isUserLogged.next(false);
    this.cartItems = []; // Clear cart items
    this.cartItemsSubject.next([]);
  }
  registerCustomer(registerForm: any) {
    console.log('Request Body:', registerForm); 
    const body = {
      custEmail: registerForm.custEmail,
      custName: registerForm.custName,
      password: registerForm.custPassword,
      custPhone: registerForm.custPhone.toString(),
      confirmPassword: registerForm.confirmPassword
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post('http://localhost:8080/regCustomer', body, { headers }).toPromise()
  }

 // customer.service.ts
custLogin(loginForm: any) {
  return this.http.get("http://localhost:8080/getCustByEmailAndPassword/" + loginForm.emailId + "/" + loginForm.password);
}
resetPassword(email: string, newPassword: string) {
  const data = { email, newPassword };
  return this.http.post('http://localhost:8080/changepassword', data);
}
getAllCust(): any {
  return this.http.get('http://localhost:8080/Cust');
}
getByCategoryGrocery() {
  return this.http.get("http://localhost:8080/getProductByCategory/grocery");
}
getByCategoryVegetable() {
  return this.http.get("http://localhost:8080/getProductByCategory/vegetable");
}
getByCategoryFruits() {
  return this.http.get("http://localhost:8080/getProductByCategory/fruits");
}
getByCategoryDairy() {
  return this.http.get("http://localhost:8080/getProductByCategory/dairy");
}
getAllRecipes(){
  return this.http.get("http://localhost:8080/getAllRecipes");
}
getByRecipe(recipeName: string) {
  return this.http.get(`http://localhost:8080/getRecipesByName/${recipeName}`);
}

deleteCustomer(custId: any): any {
  return this.http.delete('http://localhost:8080/deleteCustomerById/' + custId);
}
updateCustomer(cust: any): any {
  const updateUrl = `http://localhost:8080/update/${cust.id}`;
  console.log('Update URL:', updateUrl);
  console.log('Data to be sent:', cust);
  return this.http.put(updateUrl, cust);
}
private totalAmountSubject = new BehaviorSubject<number>(0);
totalAmount$ = this.totalAmountSubject.asObservable();

setTotalAmount(amount: number) {
  this.totalAmount = amount;
  this.totalAmountSubject.next(this.totalAmount); // Update the subject
}
}