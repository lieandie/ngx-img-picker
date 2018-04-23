import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images: HTMLImageElement[];

  ngOnInit() {
    this.images = [];
  }

  imagesLoaded(images) {
    this.images = images;
  }

}
