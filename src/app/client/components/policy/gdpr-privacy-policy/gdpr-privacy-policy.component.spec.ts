import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprPrivacyPolicyComponent } from './gdpr-privacy-policy.component';

describe('GdprPrivacyPolicyComponent', () => {
  let component: GdprPrivacyPolicyComponent;
  let fixture: ComponentFixture<GdprPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdprPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdprPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
