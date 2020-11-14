import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  showDesc1 = false;
  showDesc2 = false;
  showDesc3 = false;
  showDesc4 = false;
  
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
