import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMdRoundButtonComponent } from './ngx-md-round-button/ngx-md-round-button.component';
import { NgxMdButtonComponent } from './ngx-md-button/ngx-md-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxMdRoundButtonComponent, NgxMdButtonComponent],
  exports: [
    NgxMdRoundButtonComponent
  ]
})
export class NgxMdButtonModule { }
