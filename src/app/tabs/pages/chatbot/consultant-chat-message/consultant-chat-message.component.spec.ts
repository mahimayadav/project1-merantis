import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantChatMessageComponent } from './consultant-chat-message.component';

describe('ConsultantChatMessageComponent', () => {
  let component: ConsultantChatMessageComponent;
  let fixture: ComponentFixture<ConsultantChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantChatMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
