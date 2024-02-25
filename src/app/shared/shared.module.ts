import { NgModule } from "@angular/core";
import { ProClubsDataTableComponent } from "./components/pro-clubs-data-table/pro-clubs-data-table.component";
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatSortModule } from "@angular/material/sort";
import { ProClubsAutoCompleteSelectComponent } from "./components/pro-clubs-auto-complete-select/pro-clubs-auto-complete-select.component";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        ProClubsDataTableComponent,
        ProClubsAutoCompleteSelectComponent
    ],
    imports: [
        MatTableModule,
        FormsModule,
        CommonModule,
        MatSortModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [ProClubsDataTableComponent, ProClubsAutoCompleteSelectComponent],
    providers: [
    ],
    bootstrap: []
})
export class SharedModule { }