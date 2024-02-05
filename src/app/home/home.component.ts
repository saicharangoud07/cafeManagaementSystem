import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  constructor(public authService: AuthService, private router: Router) {}
  
  logout(): void {
    this.router.navigate(['/login']);
}

}
