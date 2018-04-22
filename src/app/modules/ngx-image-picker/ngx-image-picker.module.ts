import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImagePickerComponent } from './img-picker/ngx-image-picker.component';
import { ImgPreviewComponent } from './img-preview/img-preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxImagePickerComponent, ImgPreviewComponent],
  exports: [
    NgxImagePickerComponent,
    ImgPreviewComponent
  ]
})
export class NgxImagePickerModule { }
