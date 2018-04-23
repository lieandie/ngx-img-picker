import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCardComponent } from './pure-card.component';

describe('PureCardComponent', () => {
  let component: PureCardComponent;
  let fixture: ComponentFixture<PureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
