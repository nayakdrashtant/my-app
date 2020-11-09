import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-banner',
  templateUrl: './carousel-banner.component.html',
  styleUrls: ['./carousel-banner.component.scss']
})
export class CarouselBannerComponent implements OnInit {

  customOptions: any = {
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    navSpeed: 1000,
    dots: true,    
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    responsive: {
      0: {
        items: 1
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
