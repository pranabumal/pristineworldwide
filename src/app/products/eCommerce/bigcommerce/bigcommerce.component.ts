import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-bigcommerce',
  templateUrl: './bigcommerce.component.html',
  styleUrls: ['./bigcommerce.component.scss']
})
export class BigcommerceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
