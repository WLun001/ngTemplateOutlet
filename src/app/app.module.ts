import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { MatTableModule } from '@angular/material';
import { CellDirective } from './table/cell.directive';
import { OldTableComponent } from './old-table/old-table.component';
import { DemoTemplateComponent } from './demo-template/demo-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    Page1Component,
    Page2Component,
    CellDirective,
    OldTableComponent,
    DemoTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
