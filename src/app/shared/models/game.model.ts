import { GAME_STATUS } from "@pro-clubs-manager/shared-dtos";
import { PlayerStat } from "./player-stat.model";

export interface Fixture {
    id: string;
    leagueId: string;
    fixtureNum: number
    startDate: Date | undefined;
    endDate: Date | undefined;
    games: Game[];


}

export interface Game {
    id: string;
    fixtureNum: number;
    homeTeamDetails: TeamStats;
    awayTeamDetails: TeamStats;
    date?: Date | undefined;
    status?: string;
}

export interface TeamStats {
    teamID: string;
    teamName: string;
    teamImgUrl?: string;
    teamGoalsAmount: number;
    teamScorers?: PlayerStat[]; // player id and how many scored
    teamAssists?: PlayerStat[];// player id and how many scored
}

export type FixtureDTO = {
    id: string;
    round: number;
    leagueId: string;
    startDate: Date;
    endDate: Date;
    games: GameFixtureData[];
  };

  export type PaginatedFixtureDTO = {
    fixtures: FixtureDTO[];
    currentPage: number;
    totalPages: number;
    totalFixtures: number;
  };

  export type GameFixtureData = {
    id: string,
    homeTeam: {
      id: string;
      name: string;
      imgUrl?: string;
    };
    awayTeam: {
      id: string;
      name: string;
      imgUrl?: string;
    };
    result?: {
      homeTeamGoals: number;
      awayTeamGoals: number;
    };
    status: GAME_STATUS;
    date?: Date;
  };

  type GoalsData = {
    scorerId: string;
    minute?: number;
    assistId?: string;
  }

  export type PlayerGameStatsData = {
    id: string;
    goals?: number;
    assists?: number;
    rating: number;
    playerOfTheMatch?: boolean;
  };
  
  export type UpdatePlayerPerformanceDataRequest = {
    playerId: string;
    goals: number;
    assists: number;
    playerOfTheMatch: boolean;
    positionPlayed: string;
    rating: number;
  };

  export type TeamGameStatsData = {
    playersStats: PlayerGameStatsData[];
    goals?: {
      scorerId: string;
      minute?: number;
      assisterId?: string;
      isOwnGoal?: boolean;
    }[];
  };