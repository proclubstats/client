import { Column, DataType } from "../../shared/models/column.model";
import { LeagueTableRow } from "../../shared/models/leagueTableTeam";

export const TEAMS_DATA: LeagueTableRow[] = [
    { teamId: '4', teamName: 'SHANA TOVAU', points: 86, gamesWon: 28, draws: 2, gamesLost: 4,gamesPlayed: 34, goalsScored: 96, goalsConceded: 33, goalDifference: 63, cleanSheets:0 },
    { teamId: '1', teamName: 'Kwincovim', points:88, gamesWon: 29, draws: 1, gamesLost: 4,gamesPlayed: 34, goalsScored: 129, goalsConceded: 38, goalDifference: 91, cleanSheets:0 },
    { teamId: '2', teamName: 'Bishbashim', points: 74, gamesWon: 23, draws: 5, gamesLost: 6,gamesPlayed: 34, goalsScored: 100, goalsConceded: 45, goalDifference: 55, cleanSheets:0 },
    { teamId: '6', teamName: 'Ironi Tiberias', points: 62, gamesWon: 19, draws: 5, gamesLost: 10,gamesPlayed: 34, goalsScored: 107, goalsConceded: 72, goalDifference: 35, cleanSheets:0},
    { teamId: '8', teamName: 'FC BROTHERSS', points: 60, gamesWon: 19, draws: 3, gamesLost: 12,gamesPlayed: 34, goalsScored: 109, goalsConceded: 72, goalDifference: 37, cleanSheets:0},
    { teamId: '13', teamName: 'Yeshishim', points: 56, gamesWon: 17, draws: 5, gamesLost: 12,gamesPlayed: 34, goalsScored: 85, goalsConceded: 61, goalDifference: 24, cleanSheets:0},
    { teamId: '11', teamName: 'Saba Meir FC', points: 53, gamesWon: 17, draws: 2, gamesLost: 15,gamesPlayed: 34, goalsScored: 80, goalsConceded: 67, goalDifference: 13, cleanSheets:0 },
    { teamId: '9', teamName: 'Maccabi Jerusalem', points: 52, gamesWon: 16, draws: 4, gamesLost: 14,gamesPlayed: 34, goalsScored: 98, goalsConceded: 82, goalDifference: 16 , cleanSheets:0},
];

export const LEAGUE_TABLE_DISPLAY_COLUMN: Column[] = [
    {
        fieldName:'index',
        displayText: '#'
    },
    {
        fieldName: 'tableIcon',
        displayText: 'Name',
        dataType: DataType.TEXT_WITH_ICON
    },
    {
        fieldName: 'gamesPlayed',
        displayText: 'GP'
    },
    {
        fieldName: 'gamesWon',
        displayText: 'W'
    },
    {
        fieldName: 'draws',
        displayText: 'D'
    },
    {
        fieldName: 'gamesLost',
        displayText: 'L'
    },
    {
        fieldName: 'goalsScored',
        displayText: 'GF'
    },
    {
        fieldName: 'goalsConceded',
        displayText: 'GA'
    },
    {
        fieldName: 'goalDifference',
        displayText: 'DIF'
    },
    {
        fieldName: 'points',
        displayText: 'P'
    }

]

export const SHORTENED_LEAGUE_TABLE_DISPLAY_COLUMN: Column[] = [
    {
        fieldName:'index',
        displayText: '#'
    },
    {
        fieldName: 'teamName',
        displayText: 'Name',
        dataType: DataType.TEXT_WITH_ICON
    },
    {
        fieldName: 'gamesWon',
        displayText: 'W'
    },
    {
        fieldName: 'draws',
        displayText: 'D'
    },
    {
        fieldName: 'gamesLost',
        displayText: 'L'
    },
    {
        fieldName: 'goalDifference',
        displayText: 'DIF'
    },
    {
        fieldName: 'points',
        displayText: 'P'
    }

]