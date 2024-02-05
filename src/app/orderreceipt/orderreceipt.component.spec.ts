import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderreceiptComponent } from './orderreceipt.component';

describe('OrderreceiptComponent', () => {
  let component: OrderreceiptComponent;
  let fixture: ComponentFixture<OrderreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderreceiptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
