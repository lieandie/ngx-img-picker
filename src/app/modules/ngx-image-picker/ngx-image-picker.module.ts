import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImagePickerComponent } from './img-picker/ngx-image-picker.component';
import { ImgPreviewCardComponent } from './img-preview-card/img-preview-card.component';
import { PureCardComponent } from './pure-card/pure-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxImagePickerComponent, ImgPreviewCardComponent, PureCardComponent],
  exports: [
    NgxImagePickerComponent,
    ImgPreviewCardComponent
  ]
})
export class NgxImagePickerModule { }
