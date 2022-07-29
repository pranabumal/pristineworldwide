import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isDropdownCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

    handleDropDown(_default?: any) {
        this.isDropdownCollapsed = !this.isDropdownCollapsed;
    }

    closeHamburgerMenu() {
        this.isDropdownCollapsed = !this.isDropdownCollapsed;
        document.getElementById('navbarsupportedcontent')?.classList.remove('show');
    }
}
