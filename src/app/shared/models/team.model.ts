import { PlayerDTOShort } from "./player.model";

export interface ITeamStats {
    wins: number;
    losses: number;
    draws: number;
    goalsScored: number;
    goalsConceded: number;
    cleanSheets: number;
  }
  
  export interface ITeam {
    id: string;
    name: string;
    league: string;
    logoUrl?: string;
    players: string[];
    captain: string;
    stats: ITeamStats;
  }

export class CreateTeamModel {
    leagueId: string = "";
    logoUrl? : string = "";
    name: string = "";
}

export interface TeamDTO {
  id: string;
  name: string;
  leagueId: string;
  imgUrl?: string;
  captain: {
    id: string;
    name: string;
  } | null;
  players: PlayerDTOShort[];
  stats: {
    games: number;
    wins: number;
    losses: number;
    draws: number;
    goalsScored: number;
    goalsConceded: number;
  };
}