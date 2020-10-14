import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

export interface NameValue {
  name: string;
  value: string;
  isFilter?: boolean;
}
export interface AppNativeID {
  title?: string;
  headers?: NameValue[];
}

export interface Columns {
  appNativeID: AppNativeID;
}

export interface Settings {
  actions?: boolean;
  columns: Columns;
  hideHeader?: boolean;
  hideSubHeader?: boolean;
  isFilter: boolean;
}

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit, OnChanges {

  @Input() source: any[];
  @Input() settings: Settings;
  @Input() tableStyle;
  @Input() headerStyle;
  @Input() maxHeight = 10;
  @Output() rowSelectedEvent: EventEmitter<any> = new EventEmitter<any>();

  tableData: any[];
  constructor() { }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    this.tableData = this.addRowData(this.source);
  }

  /**
   * Turn objects into array and add to the source
   * @param source array of objects
   */
  addRowData(source) {
    let tableData = [];
    if (source) {
      source.forEach( row => {
        let newRow = [];
        for (const property in row) {
          newRow.push(row[property]);
        }
        tableData.push({ row, newRow });
      });
    }
  
    return tableData
  }

  sort(col, sortDirection) {
    this.tableData.sort( (a, b) => {
      if (a.row[col] > b.row[col]) {
        if (sortDirection === 'down') {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (sortDirection === 'down') {
          return -1;
        } else {
          return 1;
        }
      }
    });
  }

  filter(source, col, value) {
    let toReturn = [];
    if (source && col && value) {
      source.forEach( row => {
        const colData = row[col] + '';
        if (colData.toUpperCase().startsWith(value.toUpperCase())) {
          toReturn.push(row);
        }
      });
    }
    return toReturn;
  }

  filterAndSort(col, value) {

  }

  filterKeyUp(event, col) {
    if (event.target.value === '') {
      this.tableData = this.addRowData(this.source);
    } else {
      this.tableData = this.addRowData(this.filter(this.source, col, event.target.value));
    }
  }


  userSelectRow(data) {
    this.rowSelectedEvent.emit(data);
  }

}
