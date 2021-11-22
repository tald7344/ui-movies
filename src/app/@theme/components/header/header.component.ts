import { Component, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../helper/layout.service';
import { DatePipe, DOCUMENT } from '@angular/common';
import { SidebarMenuItems } from '../../model/sidebar-menu-items';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('grow', [
      // Note the trigger name
      transition(':enter', [
        // :enter is alias to 'void => *'
        style({right: '-40vw'}),
        animate(200, style({right: '*'}))
      ]),
      transition(':leave', [
        // :leave is alias to '* => void'
        animate(200, style({right: '-40vw', opacity: '0'}))
      ]),
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @Input() menus: SidebarMenuItems[];
  searchForm: HTMLFormElement;
  searchIcon: HTMLButtonElement;
  searching = false;
  inputValue = '';
  showSidebar = true;

  constructor(@Inject(DOCUMENT) private document: Document,
              private render: Renderer2) {}

  ngOnInit() {
    this.searchForm = this.document.querySelector('.search-form');
    this.searchIcon = this.document.querySelector('.custom-search-icon');
  }

  showSearch() {
    this.render.addClass(this.searchIcon, 'd-none');
    this.render.removeClass(this.searchForm, 'd-none');
  }

  hideSearch() {
    this.inputValue = '';
    this.searching = false;
    this.render.addClass(this.searchForm, 'd-none');
    this.render.removeClass(this.searchIcon, 'd-none');          
  }

  typing() {
    if (this.inputValue) this.searching = true;
    else this.searching = false;    
  }

  


}
