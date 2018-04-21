import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImagePickerComponent } from './ngx-image-picker.component';

describe('NgxImagePickerComponent', () => {
  let component: NgxImagePickerComponent;
  let fixture: ComponentFixture<NgxImagePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImagePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
