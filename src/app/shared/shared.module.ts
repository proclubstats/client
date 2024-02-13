import { NgModule } from "@angular/core";
import { ProClubsDataTableComponent } from "./components/pro-clubs-data-table/pro-clubs-data-table.component";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatSortModule } from "@angular/material/sort";


@NgModule({
    declarations: [
        ProClubsDataTableComponent
    ],
    imports: [
        MatTableModule,
        FormsModule, 
        CommonModule,
        MatSortModule,
    ],
    exports: [ProClubsDataTableComponent],
    providers: [
    ],
    bootstrap: []
})
export class SharedModule { }