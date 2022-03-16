import { Component } from '@angular/core';
import { animations } from '../../../animations/animations';
@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  animations: animations,
})
export class Page2Component {
  showIt = false;
  constructor() {}
}
