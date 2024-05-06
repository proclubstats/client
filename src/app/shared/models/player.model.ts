export interface IPlayerStats {
    games: number;
    goals: number;
    assists: number;
    cleanSheets: number;
    playerOfTheMatch: number;
}

export interface IPlayer {
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

export interface PlayerDTO {
    id: string;
    team: {
        id: string;
        name: string;
        imgUrl: string;
    };
    name: string;
    age: number;
    imgUrl?: string;
    position: string;
    phone?: string;
    email?: string;
    playablePositions: string[];
    stats: {
        games: number;
        goals: number;
        cleanSheets: number;
        assists: number;
        playerOfTheMatch: number;
        avgRating: number;
    };
}

export interface PlayerDTOShort {
    id: string;
    name: string;
    imgUrl?: string;
    position: string;
}