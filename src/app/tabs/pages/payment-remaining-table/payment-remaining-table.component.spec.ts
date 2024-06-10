import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRemainingTableComponent } from './payment-remaining-table.component';

describe('PaymentRemainingTableComponent', () => {
  let component: PaymentRemainingTableComponent;
  let fixture: ComponentFixture<PaymentRemainingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRemainingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentRemainingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
