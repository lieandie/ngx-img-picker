import { Component, OnInit, ViewChild, Input, ElementRef} from '@angular/core';
import {animate, sequence, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-img-picker',
  templateUrl: './ngx-image-picker.component.html',
  styleUrls: ['./ngx-image-picker.component.scss'],
  animations: [
    trigger('stateAnim', [
      transition('* => void', [
        style({ height: '*', opacity: '1', transform: 'translateX(0)'}),
        sequence([
          animate(".25s ease", style({ height: '*', opacity: '.2', transform: 'scale(0.3)' })),
          animate(".1s ease", style({ height: '0', opacity: 0, transform: 'scale(0)' }))
        ])
      ]),
      transition('void => *', [
        style({ opacity: '0', transform: 'scale(0)'}),
        sequence([
          animate(".1s ease", style({ opacity: '.2', transform: 'scale(0.7)'})),
          animate(".35s ease", style({ opacity: 1, transform: 'scale(1)'  }))
        ])
      ])
    ])
  ]
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
