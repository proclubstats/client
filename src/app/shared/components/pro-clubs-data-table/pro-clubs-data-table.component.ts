import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Column } from '../../models/column.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'pro-clubs-data-table',
  templateUrl: './pro-clubs-data-table.component.html',
  styleUrl: './pro-clubs-data-table.component.scss'
})
export class ProClubsDataTableComponent {

  @ViewChild(MatSort) sort: MatSort | null = null;

  displayedColumnsData: Column[] = [];
  columnsNamesOnly: string[] = [];
  sortedTableData: any;
  tempData: any;
  originalData: any;

  @Input() defaultSort?: string;
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

    this.sortedTableData.data = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      return this.compare(a[sort.active], b[sort.active], isAsc);
    });

  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onRowClick(element: any) : void{
    this.onRowClickEvent.emit(element);
  }
}
