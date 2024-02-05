import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyitemComponent } from './buyitem.component';

describe('BuyitemComponent', () => {
  let component: BuyitemComponent;
  let fixture: ComponentFixture<BuyitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
