import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    PagingTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
