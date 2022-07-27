import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.scss']
})
export class MachineLearningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
