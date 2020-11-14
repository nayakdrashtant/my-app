import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  showMobMenu = false;
  @Input() lighbg: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  goToUrl(page){
    window.location.href = page;
  }

}
