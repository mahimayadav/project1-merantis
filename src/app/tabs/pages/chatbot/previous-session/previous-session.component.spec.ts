import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSessionComponent } from './previous-session.component';

describe('PreviousSessionComponent', () => {
  let component: PreviousSessionComponent;
  let fixture: ComponentFixture<PreviousSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
