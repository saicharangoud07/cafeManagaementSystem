
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] 
})
export class AdminComponent {
  items: any[] = [];
 
  constructor(private http: HttpClient) {
   
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.http.get<any[]>('http://localhost:8080/register').subscribe(data => {
      this.items = data;
    });
  }



  deleteItem(id: number) {
    this.http.delete(`http://localhost:8080/deleteEmployee/${id}`).subscribe(() => {
      window.location.reload();
    }, error => {
      console.error('Delete failed:', error);
    });
  }
}


