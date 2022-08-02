import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-pristine-sfa',
  templateUrl: './pristine-sfa.component.html',
  styleUrls: ['./pristine-sfa.component.scss']
})
export class PristineSfaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
