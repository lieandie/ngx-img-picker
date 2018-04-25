import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxImagePickerModule } from './modules/ngx-md-image-picker/ngx-md-image-picker.module';
import { StandWrapperComponent } from './stands/stand-wrapper/stand-wrapper.component';
import { PickerStandComponent } from './stands/picker-stand/picker-stand.component';
import { ButtonStandComponent } from './stands/button-stand/button-stand.component';
import { ModalStandComponent } from './stands/modal-stand/modal-stand.component';



@NgModule({
  declarations: [
    AppComponent,
    StandWrapperComponent,
    PickerStandComponent,
    ButtonStandComponent,
    ModalStandComponent,
  ],
  imports: [
    BrowserModule,
    NgxImagePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
