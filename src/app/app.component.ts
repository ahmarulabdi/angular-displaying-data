import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <h1>Tour of Heroes</h1>
  <h2>My favorite hero is : {{ hero }}</h2>
  <p>heroes</p>
  <ul>
  <li *ngFor="let hero of heroes">{{ hero }}</li>
  </ul>
  `
})
export class AppComponent {
  title = 'displaying-data';
  heroes = ['Windostroms','Hulk', 'IronMan', 'Thor', 'Superman', 'Batman'];
}
