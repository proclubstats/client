export interface LeagueTableRow {
    teamId: string;
    teamName: string;
    imgUrl?: string;
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    draws: number;
    goalDifference: number;
    points: number;
    goalsConceded: number;
    goalsScored: number;
    cleanSheets: number;
    tableIcon? :  {
      name: string;
      imgUrl: string;
      isTeam: boolean ;
  }
  }