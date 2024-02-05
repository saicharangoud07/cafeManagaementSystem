
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../orderservice.service';;

@Component({
  selector: 'app-orderreceipt',
  templateUrl: './orderreceipt.component.html',
  styleUrls: ['./orderreceipt.component.css'],
})
export class OrderreceiptComponent implements OnInit {
  orderDetails: any;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.orderDetails$.subscribe((orderDetails) => {
      this.orderDetails = orderDetails;
    });
  }
}
