import { Component, Input } from '@angular/core';
import { Column } from '../../models/column.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'pro-clubs-data-table',
  templateUrl: './pro-clubs-data-table.component.html',
  styleUrl: './pro-clubs-data-table.component.scss'
})
export class ProClubsDataTableComponent {
  displayedColumnsData: Column[] = [];
  columnsNamesOnly: string[] = [];
  sortedTableData: any;
  tempData: any;
  originalData: any;
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
  constructor() { }


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
}
