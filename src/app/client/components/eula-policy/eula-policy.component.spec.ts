import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EULAPolicyComponent } from './eula-policy.component';

describe('EULAPolicyComponent', () => {
  let component: EULAPolicyComponent;
  let fixture: ComponentFixture<EULAPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EULAPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EULAPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
