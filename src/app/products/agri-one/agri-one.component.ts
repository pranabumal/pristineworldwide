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
            portalId: "22480607",
            formId: "11b16cef-7bb3-4a36-b9af-2b44063de231",
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
