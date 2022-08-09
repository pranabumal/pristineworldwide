import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-business-intelligent',
  templateUrl: './business-intelligent.component.html',
  styleUrls: ['./business-intelligent.component.scss']
})
export class BusinessIntelligentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
