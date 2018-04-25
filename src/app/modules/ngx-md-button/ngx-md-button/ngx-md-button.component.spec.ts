import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMdButtonComponent } from './ngx-md-button.component';

describe('NgxMdButtonComponent', () => {
  let component: NgxMdButtonComponent;
  let fixture: ComponentFixture<NgxMdButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMdButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
