import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-preview-layout',
  templateUrl: './img-preview-layout.component.html',
  styleUrls: ['./img-preview-layout.component.css']
})
export class ImgPreviewLayoutComponent implements OnInit {

  @Input() private images: HTMLImageElement[];

  constructor() { }

  ngOnInit() {
    this.images = [];
  }

}
