import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-picker',
  templateUrl: './ngx-image-picker.component.html',
  styleUrls: ['./ngx-image-picker.component.css']
})
export class NgxImagePickerComponent implements OnInit {

  @ViewChild('imageInput') imageInput: ElementRef;
  @Input() multiple: boolean;
  @Output() imgLoaded: EventEmitter<HTMLImageElement[]> = new EventEmitter<HTMLImageElement[]>();

  images: HTMLImageElement[];

  constructor() { }

  ngOnInit() {
  }

  private upload() {
    const images: HTMLImageElement[] = [];
    const inputElement: HTMLInputElement = this.imageInput.nativeElement;
    if (inputElement.files) {
      for (let i = 0; i < inputElement.files.length; i++) {
        const reader = new FileReader();
        const image = new Image();
        reader.onload = (e: any) => {
          image.src = e.target.result;
          images.push(image);
        };
        reader.readAsDataURL(inputElement.files[i]);
      }
      this.imgLoaded.emit(images);
    }
  }
}
