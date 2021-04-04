import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerPolicyComponent } from './disclaimer-policy.component';

describe('DisclaimerPolicyComponent', () => {
  let component: DisclaimerPolicyComponent;
  let fixture: ComponentFixture<DisclaimerPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
