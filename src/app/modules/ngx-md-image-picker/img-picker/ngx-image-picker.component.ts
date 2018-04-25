import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-picker',
  templateUrl: './ngx-image-picker.component.html',
  styleUrls: ['./ngx-image-picker.component.css']
})
export class NgxImagePickerComponent implements OnInit {

  @Input() private multiple: boolean;
  @ViewChild('dropArea') dropArea: ElementRef;
  @ViewChild('imageInput') imageInput: ElementRef;

  private images: HTMLImageElement[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.dropAreaInit();
  }

  private upload(files: FileList) {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const image = new Image();
        reader.onload = (e: any) => {
          image.src = e.target.result;
          image.title = files[i].name;
          this.images.push(image);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  private dropAreaInit() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.dropArea.nativeElement.addEventListener(eventName, (event) => {
        event.preventDefault();
        event.stopPropagation();
      }, false);
    });
    this.dropArea.nativeElement.addEventListener('drop', (event) => {
      this.upload(event.dataTransfer.files);
    }, false);
    this.dropArea.nativeElement.addEventListener('click', (event) => {
      this.imageInput.nativeElement.click();
    }, false);
  }

  private deleteImage(img: HTMLImageElement){
    const idx = this.images.indexOf(img);
    if (idx > -1) {
      this.images.splice(idx,1);
    }
  }

}
