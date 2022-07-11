import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
    selector: 'app-sap-hana',
    templateUrl: './sap-hana.component.html',
    styleUrls: ['./sap-hana.component.scss']
})
export class SapHanaComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        AOS.init();
    }

}
