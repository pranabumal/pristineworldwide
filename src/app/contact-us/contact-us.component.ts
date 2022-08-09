import {Component, OnInit} from '@angular/core';
import * as AOS from "aos";

declare let hbspt: any

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
        AOS.init();
    }

    ngAfterContentInit(): void {
        hbspt.forms.create({
            portalId: "22480607",
            formId: "11b16cef-7bb3-4a36-b9af-2b44063de231",
            target: "#hubspotForm"
        });
        setTimeout(function (){
            window.scrollTo(1510, 1510);
        },10);
    }
}
