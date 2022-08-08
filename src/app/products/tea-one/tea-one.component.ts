import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
declare let hbspt: any

@Component({
    selector: 'app-tea-one',
    templateUrl: './tea-one.component.html',
    styleUrls: ['./tea-one.component.scss']
})
export class TeaOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        AOS.init();
    }

    ngAfterContentInit(): void {
        hbspt.forms.create({
            region: "na1",
            portalId: "22480607",
            formId: "11b16cef-7bb3-4a36-b9af-2b44063de231",
            target: "#hubspotForm"
        });
    }

    scroll(el: any) {
        el.scrollIntoView();
    }
}
