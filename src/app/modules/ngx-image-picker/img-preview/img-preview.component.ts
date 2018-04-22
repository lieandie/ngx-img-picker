import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-preview',
  templateUrl: './img-preview.component.html',
  styleUrls: ['./img-preview.component.css']
})
export class ImgPreviewComponent implements OnInit {

  @Input() images: HTMLImageElement[];

  constructor() { }

  ngOnInit() {
    this.images = [];
  }

}
