import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routes.module";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FixturesComponent } from "./components/fixtures/fixtures.component";
import { LeagueTableComponent } from "./components/league-table/league-table.component";
import { TopAssistsComponent } from "./components/top-assists/top-assists.component";
import { TopScorersComponent } from "./components/top-scorers/top-scorers.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavbarComponent,
        FixturesComponent,
        LeagueTableComponent,
        TopAssistsComponent,
        TopScorersComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }