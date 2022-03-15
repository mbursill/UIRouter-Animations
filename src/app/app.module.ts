import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { UIRouterConfig } from './uiRouter.config';
import { AppComponent } from './app.component';
import { Ng2StateDeclaration, UIRouterModule } from '@uirouter/angular';
import { PagesModule } from './pages/pages.module';

const states: Ng2StateDeclaration[] = [
  {
    name: 'pages.**',
    url: '/',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: states,
      initial: 'page1',
      config: UIRouterConfig.initialize,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
