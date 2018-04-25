import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStandComponent } from './button-stand.component';

describe('ButtonStandComponent', () => {
  let component: ButtonStandComponent;
  let fixture: ComponentFixture<ButtonStandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonStandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
