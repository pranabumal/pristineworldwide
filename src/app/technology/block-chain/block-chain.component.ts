import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.scss']
})
export class BlockChainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
  }

}
