import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPreviewCardComponent } from './img-preview-card.component';

describe('ImgPreviewCardComponent', () => {
  let component: ImgPreviewCardComponent;
  let fixture: ComponentFixture<ImgPreviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPreviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
