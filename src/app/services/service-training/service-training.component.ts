import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './service-training.component.html',
  styleUrls: ['./service-training.component.scss']
})
export class ServiceTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
