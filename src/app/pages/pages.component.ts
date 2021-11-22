import { Component, OnInit } from '@angular/core';

import { SIDEBAR_MENU_ITEM } from '../sidebar-menu';

@Component({
  selector: 'app-pages',
  template: `
  <div id="mobile_header" class="">
    <app-header [menus]="menu"></app-header>
  </div>

  <router-outlet></router-outlet>
 `
})
export class PagesComponent implements OnInit {
  menu = SIDEBAR_MENU_ITEM;

  constructor() {
  }

  ngOnInit(): void {
  }



}
