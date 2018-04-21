import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './ngx-image-picker.component.html',
  styleUrls: ['./ngx-image-picker.component.css']
})
export class NgxImagePickerComponent implements OnInit {

  @ViewChild('imageInput') imageInput;
  @ViewChild('canvas') canvas;

  private image;

  constructor() { }

  ngOnInit() {
    this.image = new Image();
    this.image.onload = e => this.drawCanvas();
  }

  private upload() {
    const inputElement = this.imageInput.nativeElement;
    if (inputElement.files && inputElement.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.image.src = e.target.result;
      reader.readAsDataURL(inputElement.files[0]);
    }
  }

  private drawCanvas() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    canvas.width = this.image.width;
    canvas.height = this.image.height;
    ctx.drawImage(this.image, 0, 0);
  }

}
