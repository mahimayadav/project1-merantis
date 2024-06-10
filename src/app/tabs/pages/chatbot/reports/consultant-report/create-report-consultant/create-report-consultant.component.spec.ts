import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportConsultantComponent } from './create-report-consultant.component';

describe('CreateReportConsultantComponent', () => {
  let component: CreateReportConsultantComponent;
  let fixture: ComponentFixture<CreateReportConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReportConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReportConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
