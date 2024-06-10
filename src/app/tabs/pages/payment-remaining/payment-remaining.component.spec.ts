import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRemainingComponent } from './payment-remaining.component';

describe('PaymentRemainingComponent', () => {
  let component: PaymentRemainingComponent;
  let fixture: ComponentFixture<PaymentRemainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRemainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentRemainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
