import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-intelligent-technology-farming',
  templateUrl: './intelligent-technology-farming.component.html',
  styleUrls: ['./intelligent-technology-farming.component.scss']
})
export class IntelligentTechnologyFarmingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
