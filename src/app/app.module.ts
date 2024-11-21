import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { TopAssistsComponent } from './components/top-assists/top-assists.component';
import { TopScorersComponent } from './components/top-scorers/top-scorers.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';
import { FixtureService } from './services/fixtures.service';
import { LeagueService } from './services/league.service';
import { HttpClientModule } from '@angular/common/http';
import { ModifyGameComponent } from './components/modify-game/modify-game.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TeamDetailsOverallComponent } from './components/team-details/tabs/team-details-overall/team-details-overall.component';
import { TeamDetailsOverallDataComponent } from './components/team-details/tabs/team-details-overall/team-details-overall-data/team-details-overall-data.component';
import { TeamDetailsMatchesComponent } from './components/team-details/tabs/team-details-matches/team-details-matches.component';
import { TeamDetailsSquadComponent } from './components/team-details/tabs/team-details-overall/team-details-squad/team-details-squad.component';
import { TeamDetailsStatsComponent } from './components/team-details/tabs/team-details-stats/team-details-stats.component';
import { TeamDetailsOverallStatsComponent } from './components/team-details/tabs/team-details-overall/team-details-overall-stats/team-details-overall-stats.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationService } from './services/notification.service';
import { AddFixtureComponent } from './components/add-fixture/add-fixture.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { TeamGamesComponent } from './components/team-games/team-games.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { AssignPlayerToTeamComponent } from './components/assign-player-to-team/assign-player-to-team.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { LastGamesFormComponent } from './components/last-games-form/last-games-form.component';
import { AgChartsModule } from 'ag-charts-angular';
import { PlayerStatsByPositionComponent } from './components/player-stats-by-position/player-stats-by-position.component';
import { TeamDetailsHistoryComponent } from './components/team-details/tabs/team-details-history/team-details-history.component';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { ConfigurationService } from './services/configration.service';

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
    CreatePlayerComponent,
    CreateTeamComponent,
    ModifyGameComponent,
    TeamDetailsComponent,
    TeamDetailsOverallComponent,
    TeamDetailsOverallDataComponent,
    TeamDetailsOverallStatsComponent,
    TeamDetailsMatchesComponent,
    TeamDetailsSquadComponent,
    TeamDetailsStatsComponent,
    TeamDetailsHistoryComponent,
    AddFixtureComponent,
    TeamGamesComponent,
    SignUpComponent,
    LoginComponent,
    AssignPlayerToTeamComponent,
    LastGamesFormComponent,
    PlayerStatsByPositionComponent,
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
    MatDialogModule,
    AgChartsModule,
    SocialLoginModule,
  ],
  exports: [],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '465418039105-p141710mc4km6ap5bkm3ujp1ftfog8bb.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    provideAnimationsAsync(),
    PlayerService,
    TeamService,
    FixtureService,
    LeagueService,
    SocialAuthService,
    NotificationService,
    ConfigurationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
