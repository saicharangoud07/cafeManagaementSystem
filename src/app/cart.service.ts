import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  username: any;
  loginStatus: any;
  isUserLogged: any;
  cartItems: any;
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  orderDetails: any;
  totalAmount: number = 0;

  constructor(private http: HttpClient) {
    this.loginStatus = false;
    this.isUserLogged = new BehaviorSubject<boolean>(false);
    this.cartItems = [];
  }

  setTotalAmount(amount: number) {
    this.totalAmount = amount;
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
    const existingItemIndex = this.cartItems.findIndex((cartItem: any) => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }

    this.cartItemsSubject.next([...this.cartItems]);
    this.updateTotalAmount();
  }

  private updateTotalAmount() {
    const totalAmount = this.cartItems.reduce((sum: number, item: any) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 1;
      return sum + (itemPrice * itemQuantity);
    }, 0);

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
    this.cartItems = [];
    this.cartItemsSubject.next([]);
  }

  registerCustomer(registerForm: any) {
    const body = {
      custEmail: registerForm.custEmail,
      custName: registerForm.custName,
      password: registerForm.custPassword,
      custPhone: registerForm.custPhone.toString(),
      confirmPassword: registerForm.confirmPassword
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post('http://localhost:8080/regCustomer', body, { headers }).toPromise();
  }

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

  getAllRecipes() {
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
}
