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
    status: GameStatus;
    date?: Date;
  };

  export enum GameStatus {
    SCHEDULED = "Scheduled",
    POSTPONED = "Postponed",
    CANCELLED = "Cancelled",
    PLAYED = "Played",
    COMPLETED = "Completed",
  }

  type GoalsData = {
    scorerId: string;
    minute?: number;
    assistId?: string;
  }


  export type GameDTO = {
    id: string;
    fixtureId: string;
    status: GameStatus;
    result?: {
      homeTeamGoals: number;
      awayTeamGoals: number;
    };
    homeTeam: {
      id: string;
      name: string;
      imgUrl?: string;
      playersPerformance?: PlayerPerformanceDTO[];
    };
    awayTeam: {
      id: string;
      name: string;
      imgUrl?: string;
      playersPerformance?: PlayerPerformanceDTO[];
    };
    date?: Date;
  };

  export type PlayerPerformanceDTO = {
    playerId: string;
    name: string;
    imgUrl?: string;
    rating: number;
    goals?: number;
    assists?: number;
    positionPlayed?: string;
    playerOfTheMatch?: boolean;
  };
  
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