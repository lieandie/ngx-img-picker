import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandWrapperComponent } from './stand-wrapper.component';

describe('StandWrapperComponent', () => {
  let component: StandWrapperComponent;
  let fixture: ComponentFixture<StandWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
