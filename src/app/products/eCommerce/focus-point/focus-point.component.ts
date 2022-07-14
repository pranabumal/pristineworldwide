import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-focus-point',
  templateUrl: './focus-point.component.html',
  styleUrls: ['./focus-point.component.scss']
})
export class FocusPointComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
