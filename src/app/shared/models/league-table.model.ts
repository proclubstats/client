export class LeagueTable {
    id: number = 0;
    teamsAmount: number = 0;
    name: string = "";
}


export interface ILeague {
    id: string;
    name: string;
    teams: string[];
    currentTitleHolder?: string;
    admins: ILeagueAdmin[];
    fixtures: string[];
}

interface ILeagueAdmin {
    playerId: string;
    role: Role;
}

enum Role {
    OWNER = "OWNER",
    MANAGER = "MANAGER",
    MODERATOR = "MODERATOR",
}