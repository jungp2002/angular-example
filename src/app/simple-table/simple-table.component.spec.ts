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

const source2 = [
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


});
