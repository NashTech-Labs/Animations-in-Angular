import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('changeDivStyle', [
      state('start', style({
        width: '150px',
        height:'100px',
        background:'blue',
        transform:'translateX(0)'
      })),
      state('end', style({
        width: '300px',
        height:'150px',
        background:'green',
        transform:'translateY(50%)'
      })),
      transition('start<=>end', animate('1500ms'))
    ]),
  ]
})
export class AppComponent {
  title = 'animationsInAngular';
  initialState='start';

  toggleState() {
    this.initialState = this.initialState === 'start' ? 'end' : 'start';
  }
}
