import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private isLoggedIn: boolean = false;
  
    setLoggedIn(value: boolean): void {
      this.isLoggedIn = value;
    }
  
    getLoggedIn(): boolean {
      return this.isLoggedIn;
  }

}
