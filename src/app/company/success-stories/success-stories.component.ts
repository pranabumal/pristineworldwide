import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

import * as AOS from 'aos';

@Component({
    selector: 'app-success-stories',
    templateUrl: './success-stories.component.html',
    styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit {

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
