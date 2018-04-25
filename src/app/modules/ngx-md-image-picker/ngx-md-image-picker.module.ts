import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxImagePickerComponent} from './img-picker/ngx-image-picker.component';
import {ImgPreviewCardComponent} from './img-preview-card/img-preview-card.component';
import {NgxMdButtonModule} from '../ngx-md-button/ngx-md-button.module';

@NgModule({
  imports: [
    CommonModule,
    NgxMdButtonModule
  ],
  declarations: [NgxImagePickerComponent, ImgPreviewCardComponent],
  exports: [
    NgxImagePickerComponent,
    ImgPreviewCardComponent
  ]
})
export class NgxImagePickerModule {
}
