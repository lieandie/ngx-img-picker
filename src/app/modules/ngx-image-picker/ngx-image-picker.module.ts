import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImagePickerComponent } from './ngx-image-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxImagePickerComponent],
  exports: [
    NgxImagePickerComponent
  ]
})
export class NgxImagePickerModule { }
