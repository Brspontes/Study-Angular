import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    photos = [
      {
        url: '../assets/images/7683420775.jpg',
        description: 'Leão1'
      },
      {
        url: '../assets/images/8609251160.jpg',
        description: 'Leão1'
      }
    ];
}
