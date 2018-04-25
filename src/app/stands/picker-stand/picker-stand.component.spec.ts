import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerStandComponent } from './picker-stand.component';

describe('PickerStandComponent', () => {
  let component: PickerStandComponent;
  let fixture: ComponentFixture<PickerStandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerStandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
