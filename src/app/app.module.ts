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
import { ModifyGameComponent } from "./components/modify-game/modify-game.component";
import { MatTabsModule } from '@angular/material/tabs';
import { TeamDetailsOverallComponent } from "./components/team-details/tabs/team-details-overall/team-details-overall.component";
import { TeamDetailsOverallDataComponent } from "./components/team-details/tabs/team-details-overall/team-details-overall-data/team-details-overall-data.component";
import { TeamDetailsMatchesComponent } from "./components/team-details/tabs/team-details-matches/team-details-matches.component";
import { TeamDetailsSquadComponent } from "./components/team-details/tabs/team-details-overall/team-details-squad/team-details-squad.component";
import { TeamDetailsStatsComponent } from "./components/team-details/tabs/team-details-stats/team-details-stats.component";
import { TeamDetailsOverallStatsComponent } from "./components/team-details/tabs/team-details-overall/team-details-overall-stats/team-details-overall-stats.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationService } from "./services/notification.service";
import { AddFixtureComponent } from "./components/add-fixture/add-fixture.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from '@angular/material/dialog';

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
        ModifyGameComponent,
        TeamDetailsComponent,
        TeamDetailsOverallComponent,
        TeamDetailsOverallDataComponent,
        TeamDetailsOverallStatsComponent,
        TeamDetailsMatchesComponent,
        TeamDetailsSquadComponent,
        TeamDetailsStatsComponent,
        AddFixtureComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTabsModule,
        MatSnackBarModule,
        SharedModule,
        MatPaginatorModule,
        MatDialogModule
    ],
    exports: [],
    providers: [
        provideAnimationsAsync(),
        PlayerService,
        TeamService,
        FixtureService,
        LeagueService,
        NotificationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }