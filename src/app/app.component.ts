import { Component } from '@angular/core';
import { Settings } from './simple-table/simple-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ae2';

  settings1: Settings = {

    columns: {
      appNativeID: {
        title: 'New Employees',
        headers:  [
          {
            name: 'firstName',
            value: 'First Name',
            isFilter: false
          },
          {
            name: 'lastName',
            value: 'Last Name',
            isFilter: false
          },
          {
            name: 'prefix',
            value: 'Prefix',
            isFilter: true
          },
          {
            name: 'age',
            value: 'Age',
            isFilter: true
          }
        ] 
      }
    },
    hideHeader: true,
    isFilter: false
  };

  settings2: Settings = {
    columns: {
      appNativeID: {
        title: 'New Employees',
        headers:  [
          {
            name: 'firstName',
            value: 'First Name',
            isFilter: false
          },
          {
            name: 'lastName',
            value: 'Last Name',
            isFilter: false
          },
          {
            name: 'prefix',
            value: 'Prefix',
            isFilter: true
          },
          {
            name: 'age',
            value: 'Age',
            isFilter: true
          }
        ] 
      }
    },
    hideHeader: false,
    isFilter: true
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
    },
    {
      firstName: 'Serious',
      lastName: 'Lopez',
      prefix: 'Mr.',
      age: 51
    },
    {
      firstName: 'Sangre',
      lastName: 'Manmoek',
      prefix: 'Ms.',
      age: 32
    },
    {
      firstName: 'Raymond',
      lastName: 'James',
      prefix: 'Mr.',
      age: 48
    },
    {
      firstName: 'Renault',
      lastName: 'De Leon',
      prefix: 'Mr.',
      age: 33
    },
    {
      firstName: 'Sonia',
      lastName: 'Chun',
      prefix: 'Ms.',
      age: 11
    },
    {
      firstName: 'Simon',
      lastName: 'St. James',
      prefix: 'Mr.',
      age: 76
    }
  ];

  userSelected($event) {
    console.log($event);
  }
}
