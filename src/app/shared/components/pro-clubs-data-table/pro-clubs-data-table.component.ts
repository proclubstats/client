import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Column, DataType } from '../../models/column.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'pro-clubs-data-table',
  templateUrl: './pro-clubs-data-table.component.html',
  styleUrl: './pro-clubs-data-table.component.scss'
})
export class ProClubsDataTableComponent {
  dataTypes = DataType;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumnsData: Column[] = [];
  columnsNamesOnly: string[] = [];
  sortedTableData: any;
  tempData: any;
  originalData: any;

  @Input() defaultSort?: string;
  @Input() secondarySort?: string;
  @Input() isClickable: boolean = false;
  @Input() set columnsToDisplay(displayedColumns: Column[]) {
    if (displayedColumns) {
      this.displayedColumnsData = [...displayedColumns];
      this.columnsNamesOnly = displayedColumns.map(column => column.fieldName);
    }
  }

  @Input() set tableData(data: any[]) {
    if (this.sortedTableData) {
      this.sortedTableData.data = [];
    }
    this.tempData = data;
    this.originalData = new MatTableDataSource(data);
    this.sortedTableData = new MatTableDataSource(data);
  }

  @Output() onRowClickEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.defaultSort ? this.sortData({ active: this.defaultSort, direction: 'desc' }) : null;
  }

  sortData(sort: any) {
    const data = this.tempData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedTableData.data = data;
      return;
    }

    this.sortedTableData.data = data.sort((a:any, b:any) => {
      const isAsc = this.sort!.direction === 'asc';
      if (a[this.sort!.active] === b[this.sort!.active]) {
        // Secondary sorting logic
        if (this.sort!.active === this.defaultSort && this.secondarySort) {
          return (a[this.secondarySort] < b[this.secondarySort] ? -1 : 1) * (isAsc ? 1 : -1);
        }
        return 0;
      }
      return (a[this.sort!.active] < b[this.sort!.active] ? -1 : 1) * (isAsc ? 1 : -1);
    });

  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onRowClick(element: any) : void{
    this.onRowClickEvent.emit(element);
  }
}
