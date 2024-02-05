import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyitem',
  templateUrl: './buyitem.component.html',
  styleUrls: ['./buyitem.component.css']
})
export class BuyitemComponent implements OnInit {
  buyItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buyItemForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      item: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.buyItemForm.valid) {
      console.log(this.buyItemForm.value);
      // Handle the form submission logic here
    }
  }
}
