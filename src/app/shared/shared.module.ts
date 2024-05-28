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
import { ProClubsSpinnerComponent } from "./components/pro-clubs-spinner/pro-clubs-spinner.component";
import { PopupDialogComponent } from "./components/popup-dialog/popup-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        ProClubsDataTableComponent,
        ProClubsAutoCompleteSelectComponent,
        ProClubsMultipleSelectComponent,
        ProClubsSpinnerComponent,
        PopupDialogComponent
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
        MatSelectModule,
        MatDialogModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    exports: [ProClubsDataTableComponent, ProClubsSpinnerComponent, ProClubsAutoCompleteSelectComponent, ProClubsMultipleSelectComponent],
    providers: [
    ],
    bootstrap: []
})
export class SharedModule { }