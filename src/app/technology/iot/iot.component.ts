import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.scss']
})
export class IotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
