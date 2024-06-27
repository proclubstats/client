import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { TopScorersComponent } from './components/top-scorers/top-scorers.component';
import { TopAssistsComponent } from './components/top-assists/top-assists.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddFixtureComponent } from './components/add-fixture/add-fixture.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { AssignPlayerToTeamComponent } from './components/assign-player-to-team/assign-player-to-team.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'fixtures',
        component: FixturesComponent
    },
    {
        path: 'top-assists',
        component: TopAssistsComponent
    },
    {
        path: 'top-scorers',
        component: TopScorersComponent
    },
    {
        path: 'league-table',
        component: LeagueTableComponent
    },
    {
        path: 'team-details',
        component: TeamDetailsComponent
    },
    {
        path: 'player-details',
        component: PlayerDetailsComponent
    },
    {
        path: 'add-team',
        component: AddTeamComponent
    },
    {
        path: 'create-player',
        component: CreatePlayerComponent
    },
    {
        path: 'add-fixture',
        component: AddFixtureComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'assign-player-to-team',
        component: AssignPlayerToTeamComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }