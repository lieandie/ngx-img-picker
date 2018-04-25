import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ngx-md-round-button',
  templateUrl: './ngx-md-round-button.component.html',
  styleUrls: ['./ngx-md-round-button.component.css']
})
export class NgxMdRoundButtonComponent implements OnInit {

  @Input() type: number;
  @ViewChild('button') button: HTMLButtonElement;

  constructor() { }

  ngOnInit() {
  }

}
