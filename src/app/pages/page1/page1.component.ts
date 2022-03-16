import { Component } from '@angular/core';
import { animations } from '../../../animations/animations';


@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  animations: animations,
})
export class Page1Component {
  showIt = false;


  constructor() {}
}
