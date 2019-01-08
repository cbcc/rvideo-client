import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  selectedLink: string;

  constructor() { }

  ngOnInit() {
  }

  setSelectedLink(link: string) {
    this.selectedLink = link;
  }
}
