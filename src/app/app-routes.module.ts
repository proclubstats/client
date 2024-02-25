import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { TopScorersComponent } from './components/top-scorers/top-scorers.component';
import { TopAssistsComponent } from './components/top-assists/top-assists.component';
import { EnterResultComponent } from './components/enter-result/enter-result.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';

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
        path: 'enter-result',
        component: EnterResultComponent
    },
    {
        path: 'team-details',
        component: TeamDetailsComponent
    },
    {
        path: 'player-details',
        component: PlayerDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }