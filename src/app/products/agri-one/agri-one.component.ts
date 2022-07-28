import {Component, OnInit} from '@angular/core';
import * as AOS from "aos";

declare let hbspt: any

@Component({
    selector: 'app-agri-one',
    templateUrl: './agri-one.component.html',
    styleUrls: ['./agri-one.component.scss']
})
export class AgriOneComponent implements OnInit {
    isFarmDetectorVisible: boolean = false;

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

    showFarmDetectorModal() {
        this.isFarmDetectorVisible = true;
    }

    handleFarmDetectorModal() {
        this.isFarmDetectorVisible = false;
    }
}
