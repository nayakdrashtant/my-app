import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit {

  showText1 = false;

  customOptions2: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      960: {
        items: 4
      },
      1300: {
        items: 5
      }
    }
    // nav: true
  }

  constructor() { }

  ngOnInit() {
  }

}
