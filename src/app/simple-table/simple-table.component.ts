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
  filterMap = {};

  currentSortColumn;
  currentSortDirection;

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
    this.currentSortColumn = col;
    this.currentSortDirection = sortDirection;

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

  filterKeyUp(event, col) {
    this.filterMap[col] = event.target.value;
    let isFilterEmpty = true;
    const keys = Object.keys(this.filterMap);
    let filteredSource = this.source;

    /**
     * Go through all the filter fields and apply the filter to all of them
     */
    for (const key of keys) {
      if (this.filterMap[key] !== '') {
        console.log(key);
        isFilterEmpty = false;
        filteredSource = this.filter(filteredSource, key, this.filterMap[key])
      }
    }

    if (isFilterEmpty) {
      this.tableData = this.addRowData(this.source);
    } else {
      this.tableData = this.addRowData(filteredSource);
    }
    
    if (this.currentSortColumn) {
      this.sort(this.currentSortColumn, this.currentSortDirection);
    }
  }


  userSelectRow(data) {
    this.rowSelectedEvent.emit(data);
  }

}
