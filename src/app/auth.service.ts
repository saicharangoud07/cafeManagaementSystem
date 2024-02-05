
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  
    setLoggedIn(value: boolean): void {
      this.isLoggedIn = value;
    }
  
    getLoggedIn(): boolean {
      return this.isLoggedIn;
  }
}
