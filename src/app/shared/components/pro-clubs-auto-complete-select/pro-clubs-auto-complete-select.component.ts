import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ListOption } from '../../models/list-option.model';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pro-clubs-auto-complete-select',
  templateUrl: './pro-clubs-auto-complete-select.component.html',
  styleUrl: './pro-clubs-auto-complete-select.component.scss'
})
export class ProClubsAutoCompleteSelectComponent {
  @Input() selectOptions: ListOption[] = [];
  myControl = new FormControl('');
  inputValue: string = '';
  filteredOptions?: Observable<string[]>;
  selectOptionsTextOnly: string[] = [];

  @Output() selectionChange = new EventEmitter<number>();
  
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.selectOptionsTextOnly = this.selectOptions.map(x => x.displayText)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  // view --> model
  registerOnChange(fn: (value: string) => void) {
    this.onChanged = fn;

    this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.selectOptionsTextOnly.filter(option => option.toLowerCase().includes(filterValue));
  }

  onInputChange(value:any) {
    var selectedValue = this.selectOptions.find(x=>x.displayText == value)?.value;
    this.selectionChange.emit(selectedValue);

    if(this.onChanged)
      this.onChanged(value);
      this.cdRef.detectChanges();
  }

  onChanged?: (val: any) => void;
}
