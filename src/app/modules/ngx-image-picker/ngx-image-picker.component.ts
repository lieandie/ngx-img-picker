import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './ngx-image-picker.component.html',
  styleUrls: ['./ngx-image-picker.component.css']
})
export class NgxImagePickerComponent implements OnInit {

  @ViewChild('imageInput') imageInput;
  @ViewChild('canvas') canvas;

  @Input() multiple: boolean;

  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    // this.image = new Image();
    // this.image.onload = e => this.drawCanvas();
  }

  private upload() {
    const inputElement = this.imageInput.nativeElement;
    if (inputElement.files) {
      for (let i = 0; i < inputElement.files.length; i++) {
        const reader = new FileReader();
        const image = new Image();
        reader.onload = (e: any) => {
          image.src = e.target.result;
          this.images.push(image);
        };
        reader.readAsDataURL(inputElement.files[i]);
      }
    }
  }

  private drawCanvas(image) {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
  }

}
