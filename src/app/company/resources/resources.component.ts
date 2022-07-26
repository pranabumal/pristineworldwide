import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
