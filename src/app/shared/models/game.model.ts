import { PlayerStat } from "./player-stat.model";

export class Fixture {
    id: number = 0;
    fixtureNum: number = 0;
    homeTeamDetails: TeamDetails = new TeamDetails();
    awayTeamDetails: TeamDetails = new TeamDetails();
    date: Date | undefined = undefined;
}

class TeamDetails { 
    teamID: string = '';
    teamName: string = '';
    teamGoalsAmount: number = 0;
    teamScorers? : PlayerStat[] = []; // player id and how many scored
    teamAssists? : PlayerStat[] = []; // player id and how many scored
}