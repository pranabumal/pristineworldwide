import {Component, OnInit} from '@angular/core';
import * as AOS from "aos";

declare let hbspt: any

@Component({
    selector: 'app-logistic-one',
    templateUrl: './logistic-one.component.html',
    styleUrls: ['./logistic-one.component.scss']
})
export class LogisticOneComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        AOS.init();
    }

    ngAfterContentInit(): void {
        hbspt.forms.create({
            region: "na1",
            portalId: "6764477",
            formId: "49b8ec53-f4b6-4a73-aeb6-2381c9acdcfa",
            target: "#hubspotForm"
        });
    }

    scroll(el: any) {
        el.scrollIntoView();
    }

}