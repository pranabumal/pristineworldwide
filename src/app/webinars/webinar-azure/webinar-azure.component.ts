import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-webinar-azure',
  templateUrl: './webinar-azure.component.html',
  styleUrls: ['./webinar-azure.component.scss']
})
export class WebinarAzureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
