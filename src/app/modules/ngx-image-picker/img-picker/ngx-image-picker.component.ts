import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-picker',
  templateUrl: './ngx-image-picker.component.html',
  styleUrls: ['./ngx-image-picker.component.css']
})
export class NgxImagePickerComponent implements OnInit {

  @Input() private multiple: boolean;
  @Output() private imgLoaded: EventEmitter<HTMLImageElement[]> = new EventEmitter<HTMLImageElement[]>();
  @ViewChild('dropArea') dropArea: ElementRef;

  private images: HTMLImageElement[];

  constructor() { }

  ngOnInit() {
    this.dropAreaInit();
  }

  private upload(files: FileList) {
    const images: HTMLImageElement[] = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const image = new Image();
        reader.onload = (e: any) => {
          image.src = e.target.result;
          images.push(image);
        };
        reader.readAsDataURL(files[i]);
      }
      this.imgLoaded.emit(images);
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
  }

}
