import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        autoplay: true,
        navText: ["<div class='nav-btn prev-slide'><img src='assets/images/icons/arrow-left.svg' alt=''></div>", "<div class='nav-btn next-slide'><img src='assets/images/icons/arrow-right.svg' alt=''></div>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 3
            }
        },
        nav: true
    }

    constructor() { }

    ngOnInit(): void {
        AOS.init();
    }

}
