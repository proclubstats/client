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
import { ProClubsMultipleSelectComponent } from "./components/pro-clubs-multiple-select/pro-clubs-multiple-select.component";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    declarations: [
        ProClubsDataTableComponent,
        ProClubsAutoCompleteSelectComponent,
        ProClubsMultipleSelectComponent
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
        MatSelectModule
    ],
    exports: [ProClubsDataTableComponent, ProClubsAutoCompleteSelectComponent, ProClubsMultipleSelectComponent],
    providers: [
    ],
    bootstrap: []
})
export class SharedModule { }