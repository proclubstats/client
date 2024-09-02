
export interface PlayerDTOShort {
    id: string;
    name: string;
    imgUrl?: string;
    position: string;
}

export interface IPlayerStats {
    games: number;
    goals: number;
    assists: number;
    cleanSheets: number;
    playerOfTheMatch: number;
    avgRating: number;
  }