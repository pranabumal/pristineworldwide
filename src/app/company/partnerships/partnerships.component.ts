import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-partnerships',
  templateUrl: './partnerships.component.html',
  styleUrls: ['./partnerships.component.scss']
})
export class PartnershipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
