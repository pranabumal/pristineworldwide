import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-rpa',
  templateUrl: './rpa.component.html',
  styleUrls: ['./rpa.component.scss']
})
export class RpaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
