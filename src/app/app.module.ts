import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxImagePickerModule } from './modules/ngx-image-picker/ngx-image-picker.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxImagePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
