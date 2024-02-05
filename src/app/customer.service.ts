import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:8080';  // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<any> {
    const url = `${this.apiUrl}/register`;  // Replace 'register' with your actual endpoint
    return this.http.get(url);
  }

  deleteCustomer(id: any): Observable<any> {
    const url = `${this.apiUrl}/deleteEmployee/${id}`;  // Replace 'deleteEmployee' with your actual endpoint
    return this.http.delete(url);
  }
}
