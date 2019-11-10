import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-root',
  template:
    `
  <h1>Tour of Heroes</h1>
  <h2>My favorite hero is : {{ myHero.name }}</h2>
  <p>heroes</p>
  <p *ngIf="heroes.length > 3">There are many of heroes</p>
  <ul>
  <li *ngFor="let hero of heroes">{{ hero.name }}</li>
  </ul>
  `
})
export class AppComponent {
  title = 'displaying-data';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Captain Amerika'),
    new Hero(3, 'Ironman'),
    new Hero(4, 'Hulk'),
    new Hero(5, 'Thor'),
  ];

  myHero = this.heroes[0];

  constructor(
  ) {
  }

}
