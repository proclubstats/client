import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListOption } from '../../models/list-option.model';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'pro-clubs-multiple-select',
  templateUrl: './pro-clubs-multiple-select.component.html',
  styleUrl: './pro-clubs-multiple-select.component.scss'
})
export class ProClubsMultipleSelectComponent {

  filteredOptions?: Observable<string[]>;
  myControl = new FormControl('');
  selectOptionsTextOnly: string[] = [];
  selectedOptions: any;

  @Input() selectOptions: ListOption[] = [];
  @Input() placeholder: string = '';

  @Output() selectionChange = new EventEmitter<any>();

  ngOnInit() {
    this.selectOptionsTextOnly = this.selectOptions.map(x => x.displayText);
  }

  onOptionChange() {
    this.selectionChange.emit(this.selectedOptions);
  }
}
