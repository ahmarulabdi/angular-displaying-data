import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <h1>Tour of Heroes</h1>
  <h2>My favorite hero is : {{ hero }}</h2>
  `
})
export class AppComponent {
  title = 'displaying-data';
  hero = 'Windostroms';
}
