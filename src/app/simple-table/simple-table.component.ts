import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

export interface AppNativeID {
  title?: string;
  headers?: string[];
}

export interface Columns {
  appNativeID: AppNativeID;
}

export interface Settings {
  actions?: boolean;
  columns: Columns;
  hideHeader?: boolean;
  hideSubHeader?: boolean;
}

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit, OnChanges {

  @Input() source: any[];
  @Input() settings: Settings;
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

  sort(colIndex) {
    console.log(colIndex);
  }

  userSelectRow(data) {
    this.rowSelectedEvent.emit(data);
  }

}
