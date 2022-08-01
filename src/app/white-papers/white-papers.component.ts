import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-webinars',
  templateUrl: './white-papers.component.html',
  styleUrls: ['./white-papers.component.scss']
})
export class WhitePapersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
