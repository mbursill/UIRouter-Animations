import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Ng2StateDeclaration, UIRouterModule } from '@uirouter/angular';

import { PagesComponent } from './pages.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const states: Ng2StateDeclaration[] = [
  {
    name: 'pages',
    component: PagesComponent,
    redirectTo: 'pages.page1',
  },
  {
    name: 'pages.page1',
    url: '/page1',
    component: Page1Component,
  },
  {
    name: 'pages.page2',
    url: '/page2',
    component: Page2Component,
  },
];

@NgModule({
  declarations: [PagesComponent, Page1Component, Page2Component],
  imports: [CommonModule, UIRouterModule.forChild({ states: states })],
})
export class PagesModule {
  constructor() {
    console.log('page module');
  }
}
