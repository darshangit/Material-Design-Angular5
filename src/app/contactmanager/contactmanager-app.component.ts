import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <p>
     <app-sidenav></app-sidenav>
    </p>
  `,
  styles: []
})
export class ContactmanagerAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
