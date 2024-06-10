import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLinksComponent } from './video-links.component';

describe('VideoLinksComponent', () => {
  let component: VideoLinksComponent;
  let fixture: ComponentFixture<VideoLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
