import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsultantDetailsComponent } from './view-consultant-details.component';

describe('ViewConsultantDetailsComponent', () => {
  let component: ViewConsultantDetailsComponent;
  let fixture: ComponentFixture<ViewConsultantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConsultantDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConsultantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
