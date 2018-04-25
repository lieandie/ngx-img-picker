import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxImagePickerModule } from './modules/ngx-md-image-picker/ngx-md-image-picker.module';
import {AppRouting} from './app.routing';
import {StandsModule} from './stands/stands.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxImagePickerModule,
    StandsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
