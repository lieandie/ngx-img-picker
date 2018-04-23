import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImagePickerComponent } from './img-picker/ngx-image-picker.component';
import { ImgPreviewLayoutComponent } from './img-preview/img-preview-layout/img-preview-layout.component';
import { ImgPreviewCardComponent } from './img-preview/img-preview-card/img-preview-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxImagePickerComponent, ImgPreviewLayoutComponent, ImgPreviewCardComponent],
  exports: [
    NgxImagePickerComponent,
    ImgPreviewLayoutComponent
  ]
})
export class NgxImagePickerModule { }
