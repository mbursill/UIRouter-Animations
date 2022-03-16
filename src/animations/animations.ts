import {
  animate,
  style,
  transition,
  trigger,
  sequence,
  group,
} from '@angular/animations';

export var animations = [
  
  trigger('animateSectionsFadeIn', [
    transition(':enter', [
      style({ opacity: 0, height: '0' }),
      sequence([
        animate(
          '.3s 0.2s ease-in-out',
          style({
            height: '*',
            opacity: 1,
          }),
        ),
      ]),
    ]),
  ]),
];
