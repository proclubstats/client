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
import { SharedModule } from "./shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PlayerDetailsComponent } from "./components/player-details/player-details.component";
import { TeamDetailsComponent } from "./components/team-details/team-details.component";
import { AddPlayerComponent } from "./components/add-player/add-player.component";
import { AddTeamComponent } from "./components/add-team/add-team.component";
import { PlayerService } from "./services/player.service";
import { TeamService } from "./services/team.service";
import { FixtureService } from "./services/fixtures.service";
import { LeagueService } from "./services/league.service";
import { HttpClientModule } from "@angular/common/http";
import { TeamDetailsSquadComponent } from "./components/team-details/team-details-squad/team-details-squad.component";
import { TeamDetailsOverallComponent } from "./components/team-details/team-details-overall/team-details-overall.component";
import { TeamDetailsStatsComponent } from "./components/team-details/team-details-stats/team-details-stats.component";
import { ModifyFixtureComponent } from "./components/modify-fixture/modify-fixture.component";

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
        PlayerDetailsComponent,
        TeamDetailsComponent,
        AddPlayerComponent,
        AddTeamComponent,
        TeamDetailsSquadComponent,
        TeamDetailsOverallComponent,
        TeamDetailsStatsComponent,
        ModifyFixtureComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [],
    providers: [
        provideAnimationsAsync(),
        PlayerService,
        TeamService,
        FixtureService,
        LeagueService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }