import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantAuthorizationComponent } from './consultant-authorization.component';

describe('ConsultantAuthorizationComponent', () => {
  let component: ConsultantAuthorizationComponent;
  let fixture: ComponentFixture<ConsultantAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantAuthorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
