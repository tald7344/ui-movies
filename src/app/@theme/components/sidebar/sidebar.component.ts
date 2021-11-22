import { DatePipe, DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import {Router} from '@angular/router';
import { LayoutService } from '../../helper/layout.service';
import { SidebarMenuItems } from '../../model/sidebar-menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})
export class SidebarComponent implements OnInit {

  @Input() menus: SidebarMenuItems[];

  constructor(private layoutService: LayoutService,
              private router: Router,
              private datePipe: DatePipe,
              @Inject(DOCUMENT) private document: Document,
              private render: Renderer2) {

  }

  ngOnInit() {

  }

  closeSidebar() {
    console.log('close sidebar');
  }

}
