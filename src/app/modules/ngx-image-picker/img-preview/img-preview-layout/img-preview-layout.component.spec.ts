import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPreviewLayoutComponent } from './img-preview-layout.component';

describe('ImgPreviewComponent', () => {
  let component: ImgPreviewLayoutComponent;
  let fixture: ComponentFixture<ImgPreviewLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPreviewLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPreviewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
