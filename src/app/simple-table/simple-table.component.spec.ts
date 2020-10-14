import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Settings, SimpleTableComponent } from './simple-table.component';
import { By } from '@angular/platform-browser';

const source1 = [
  {
    firstName: 'Jung',
    lastName: 'Paek'
  },
  {
    firstName: 'Lambert',
    lastName: 'Stuart'
  }
];

const settings2: Settings = {
  columns: {
    appNativeID: {
      title: 'New Employees',
      headers:  [
        {
          name: 'firstName',
          value: 'First Name',
          isFilter: false,
        },
        {
          name: 'lastName',
          value: 'Last Name',
          isFilter: false,
        },
        {
          name: 'prefix',
          value: 'Prefix',
          isFilter: true,
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

const   source2 = [
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
    lastName: 'Kaeley',
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

const sortTestData = [
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
]

fdescribe('SimpleTableComponent', () => {
  let component: SimpleTableComponent;
  let fixture: ComponentFixture<SimpleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableComponent);
    component = fixture.componentInstance;
    component.source = source2;
    component.settings = settings2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert data', () => {
    const result = component.addRowData(source2);
    expect(result[0].newRow.length).toBe(4);
  });

  it('should sort data down', () => {
    component.tableData = component.addRowData(sortTestData);
    component.sort('age', 'down');
    expect(component.tableData[0].row.firstName).toBe('Lambert');
  });

  it('should sort data up', () => {
    component.tableData = component.addRowData(sortTestData);
    component.sort('age', 'up');
    expect(component.tableData[0].row.firstName).toBe('Alicia');
  });

  it('should apply new table style', () => {
    component.tableStyle ='tableStyle';
    fixture.detectChanges();
    const elements = fixture.debugElement.queryAll(By.css('.tableStyle'));
    expect(elements.length).toBe(1);
  });

  it('should apply new header style', () => {
    component.headerStyle ='headerStyle';
    fixture.detectChanges();
    const elements = fixture.debugElement.queryAll(By.css('.headerStyle'));
    expect(elements.length).toBe(1);
  });

  it('should not have a titlee', () => {
    component.settings.hideHeader = true;
    fixture.detectChanges();
    const elements = fixture.debugElement.queryAll(By.css('.title'));
    expect(elements.length).toBe(0);
  });

  it('should have filter row', () => {
    const elements = fixture.debugElement.queryAll(By.css('.filter-input'));
    expect(elements.length).toBe(2);
  });

  it('should filter data by column', () => {
    const result = component.filter(source2, 'lastName', 'k');
    console.log(result);
    expect(result.length).toBe(2);
  });

  it('should filter data when key pressed', () => {
    
  })

});
