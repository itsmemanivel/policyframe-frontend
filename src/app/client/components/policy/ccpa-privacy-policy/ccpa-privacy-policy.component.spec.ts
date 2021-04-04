import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcpaPrivacyPolicyComponent } from './ccpa-privacy-policy.component';

describe('CcpaPrivacyPolicyComponent', () => {
  let component: CcpaPrivacyPolicyComponent;
  let fixture: ComponentFixture<CcpaPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcpaPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpaPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
