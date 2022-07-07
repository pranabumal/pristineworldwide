import {Component, OnInit} from '@angular/core';

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
    }

    ngAfterContentInit(): void {
        hbspt.forms.create({
            portalId: "6764477",
            formId: "5d62b6a1-cddb-4ace-b553-7efcf2b4abfb",
            target: "#hubspotForm"
        });
    }
}
