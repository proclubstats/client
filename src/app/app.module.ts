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
import { ModifyFixtureComponent } from "./components/modify-fixture/modify-fixture.component";
import { MatTabsModule } from '@angular/material/tabs';
import { TeamDetailsOverallComponent } from "./components/team-details/tabs/team-details-overall/team-details-overall.component";
import { TeamDetailsOverallDataComponent } from "./components/team-details/tabs/team-details-overall/team-details-overall-data/team-details-overall-data.component";
import { TeamDetailsMatchesComponent } from "./components/team-details/tabs/team-details-matches/team-details-matches.component";
import { TeamDetailsSquadComponent } from "./components/team-details/tabs/team-details-overall/team-details-squad/team-details-squad.component";
import { TeamDetailsStatsComponent } from "./components/team-details/tabs/team-details-stats/team-details-stats.component";
import { TeamDetailsOverallStatsComponent } from "./components/team-details/tabs/team-details-overall/team-details-overall-stats/team-details-overall-stats.component";

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
        ModifyFixtureComponent,
        TeamDetailsComponent,
        TeamDetailsOverallComponent,
        TeamDetailsOverallDataComponent,
        TeamDetailsOverallStatsComponent,
        TeamDetailsMatchesComponent,
        TeamDetailsSquadComponent,
        TeamDetailsStatsComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTabsModule
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