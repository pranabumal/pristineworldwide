import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-transform-sales-force',
  templateUrl: './transform-sales-force.component.html',
  styleUrls: ['./transform-sales-force.component.scss']
})
export class TransformSalesForceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
