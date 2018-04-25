import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMdRoundButtonComponent } from './ngx-md-round-button.component';

describe('NgxMdRoundButtonComponent', () => {
  let component: NgxMdRoundButtonComponent;
  let fixture: ComponentFixture<NgxMdRoundButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMdRoundButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMdRoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
