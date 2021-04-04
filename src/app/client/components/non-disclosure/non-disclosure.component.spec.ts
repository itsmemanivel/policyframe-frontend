import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDisclosureComponent } from './non-disclosure.component';

describe('NonDisclosureComponent', () => {
  let component: NonDisclosureComponent;
  let fixture: ComponentFixture<NonDisclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonDisclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
