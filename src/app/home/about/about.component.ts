import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  showtext = false;
  currentPage = 0;
  showimg1 = false;
  showimg2 = false;
  showimg3 = false;

  constructor() { }

  ngOnInit() {
  }

}
