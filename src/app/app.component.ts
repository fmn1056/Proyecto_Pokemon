import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'clima', url: '/clima', icon: 'cloud' },
    { title: 'conversor', url: '/convert', icon: 'cash' },
    { title: 'southpark', url: '/characters', icon: 'people' },
    { title: '404', url: '/page404', icon: 'warning' },


  ];
  public labels = [];
  constructor() {}
}
