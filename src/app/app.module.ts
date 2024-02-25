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
import { GameDetailsComponent } from "./components/game-details/game-details.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from "@angular/material/table";
import { SharedModule } from "./shared/shared.module";
import { EnterResultComponent } from "./components/enter-result/enter-result.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PlayerDetailsComponent } from "./components/player-details/player-details.component";
import { TeamDetailsComponent } from "./components/team-details/team-details.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavbarComponent,
        FixturesComponent,
        LeagueTableComponent,
        TopAssistsComponent,
        TopScorersComponent,
        GameDetailsComponent,
        EnterResultComponent,
        PlayerDetailsComponent,
        TeamDetailsComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }