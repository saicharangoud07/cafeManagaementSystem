import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  private bagItems: any[] = [];
  constructor() { }

  addToBag(item: any) {
    // this.bagItems.push(item);
    const existingItem = this.bagItems.find((bagItem) => bagItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.bagItems.push({ ...item, quantity: 1 });
    }
  }

  removeFromBag(item: any): void {
    this.bagItems = this.bagItems.filter((bagItem) => bagItem.id !== item.id);
  }

  getBagItems() {
    return this.bagItems;
  }

  buyNow(item: any): void {
    // Add logic for the buy now functionality, such as navigating to the checkout page
    console.log('Buy Now clicked for:', item);
  }
}