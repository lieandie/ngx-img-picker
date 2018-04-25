import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonStandComponent} from './button-stand/button-stand.component';
import {ModalStandComponent} from './modal-stand/modal-stand.component';
import {PickerStandComponent} from './picker-stand/picker-stand.component';
import {NgxImagePickerModule} from '../modules/ngx-md-image-picker/ngx-md-image-picker.module';
import {NgxMdButtonModule} from '../modules/ngx-md-button/ngx-md-button.module';
import {NgxMdModalModule} from '../modules/ngx-md-modal/ngx-md-modal.module';

@NgModule({
  imports: [
    CommonModule,
    NgxImagePickerModule,
    NgxMdButtonModule,
    NgxMdModalModule
  ],
  declarations: [ButtonStandComponent, ModalStandComponent, PickerStandComponent],
  exports: [
    ButtonStandComponent, ModalStandComponent, PickerStandComponent
  ]
})
export class StandsModule {
}
