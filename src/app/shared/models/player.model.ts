export interface IPlayerStats {
    games: number;
    goals: number;
    assists: number;
    cleanSheets: number;
    playerOfTheMatch: number;
}

export interface IPlayer{
    id: string;
    team: string;
    phone?: Number;
    email?: string;
    name: string;
    age: number;
    imgUrl?: string;
    stats: IPlayerStats;
    position: string;
    playablePositions: string[];
}