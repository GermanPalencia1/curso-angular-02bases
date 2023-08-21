import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
    <h3>Counter: {{counter}}</h3>
    <button (click)="icreaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="icreaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  public icreaseBy(value: number):void {
    this.counter += value;
  }
  public resetCounter():void {
    this.counter = 10;
  }
}
