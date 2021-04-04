import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedVideosComponent } from './embed-videos.component';

describe('EmbedVideosComponent', () => {
  let component: EmbedVideosComponent;
  let fixture: ComponentFixture<EmbedVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbedVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
