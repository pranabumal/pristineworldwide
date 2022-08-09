import {Component, OnInit} from '@angular/core';

import * as AOS from 'aos';

declare let hbspt: any

@Component({
    selector: 'app-sap-business-bydesign',
    templateUrl: './sap-business-bydesign.component.html',
    styleUrls: ['./sap-business-bydesign.component.scss']
})
export class SapBusinessBydesignComponent implements OnInit {

    image = [
        "assets/images/businessByDesign/carousel-1.jpeg",
        "assets/images/businessByDesign/carousel-2.jpeg",
        "assets/images/businessByDesign/carousel-3.jpeg"
    ];

    constructor() {
    }

    ngOnInit(): void {
        AOS.init();
    }

    // ngAfterContentInit(): void {
    //     hbspt.forms.create({
    //         region: "na1",
    //         portalId: "22480607",
    //         formId: "11b16cef-7bb3-4a36-b9af-2b44063de231",
    //         target: "#hubspotForm"
    //     });
    // }
    //
    // scroll(el: any) {
    //     el.scrollIntoView();
    // }
}
