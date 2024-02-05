
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderDetailsSource = new BehaviorSubject<any>(null);
  orderDetails$ = this.orderDetailsSource.asObservable();

  updateOrderDetails(orderDetails: any) {
    this.orderDetailsSource.next(orderDetails);
  }
}
