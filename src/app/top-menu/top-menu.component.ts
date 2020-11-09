import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  showMobMenu = false;

  constructor() { }

  ngOnInit() {
  }
  goToUrl(page) {
    window.location.href = page;
  }
}
