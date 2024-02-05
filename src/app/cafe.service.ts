
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private apiUrl = 'http://localhost:8080/loki';

  constructor(private http: HttpClient) {}

  registerUser(cafe: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cafe);
  }
  custLogin(loginForm: any) {
    console.log(loginForm.emailId, ' ', loginForm.password);
  return this.http.get("http://localhost:8080/getCustByEmailAndPassword/" + loginForm.emailId + "/" + loginForm.password);
}
logout(): void {
  // Perform any logout logic if needed
  // This is just an example; you might not need this in CafeService
}

}
