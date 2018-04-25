import { Component, OnInit, Input } from '@angular/core';
import {ButtonTypes} from '../../ngx-md-button/button-types.enum';

@Component({
  selector: 'app-img-preview-card',
  templateUrl: './img-preview-card.component.html',
  styleUrls: ['./img-preview-card.component.css']
})
export class ImgPreviewCardComponent implements OnInit {

  @Input() private image: HTMLImageElement;
  private buttonTypes = ButtonTypes;

  constructor() { }

  ngOnInit() {
  }

}
