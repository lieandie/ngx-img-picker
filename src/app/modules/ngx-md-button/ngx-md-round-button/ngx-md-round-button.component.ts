import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ngx-md-round-button',
  templateUrl: './ngx-md-round-button.component.html',
  styleUrls: ['./ngx-md-round-button.component.css', '../button.css']
})
export class NgxMdRoundButtonComponent implements OnInit {

  @Input() type: string;
  @Input() size: string;
  @ViewChild('button') button: ElementRef;
  @Output('md-click') click: EventEmitter<Event> = new EventEmitter<Event>();


  constructor() {
  }

  ngOnInit() {

  }

  private clickEmit(e: Event){
    this.click.emit(e);
  }
}
