import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ngx-md-round-button',
  templateUrl: './ngx-md-round-button.component.html',
  styleUrls: ['./ngx-md-round-button.component.css', '../button.css']
})
export class NgxMdRoundButtonComponent implements OnInit {

  @Input() type: number;
  @ViewChild('button') button: ElementRef;


  constructor() {
  }

  ngOnInit() {

  }

}
