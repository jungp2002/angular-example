import { Component } from '@angular/core';
import { Settings } from './simple-table/simple-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ae2';

  settings2: Settings = {
    columns: {
      appNativeID: {
        title: 'New Employees',
        headers:  [
          {
            name: 'firstName',
            value: 'First Name'
          },
          {
            name: 'lastName',
            value: 'Last Name'
          },
          {
            name: 'prefix',
            value: 'Prefix'
          },
          {
            name: 'age',
            value: 'Age'
          }
        ] 
      }
    },
    hideHeader: false
  };

  source2 = [
    {
      firstName: 'Jung',
      lastName: 'Paek',
      prefix: 'Mr.',
      age: 16
    },
    {
      firstName: 'Lambert',
      lastName: 'Stuart',
      prefix: '??',
      age: 12
    },
    {
      firstName: 'Alicia',
      lastName: 'Keys',
      prefix: 'Ms.',
      age: 21
    }
  ];

  userSelected($event) {
    console.log($event);
  }
}
