import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Settings, SimpleTableComponent } from './simple-table.component';

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
      headers:  ['First Name', 'Last Name', 'Prefix', 'Age'] 
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
});
