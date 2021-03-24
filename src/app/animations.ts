import { trigger, style, transition, animate, query } from '@angular/animations';


export const fadeInAnimaiton = trigger('routineAnimations', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment',
    [
      query(':enter', [style({ opacity: 0 })], { optional: true }),
      query(':leaves', [style({ opacity: 1 }), animate('300ms ease-out', style({ opacity: 0 }))], { optional: true }),
      query(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))], { optional: true }),
]

)
])
