import { Column } from "../../shared/models/column.model";
import { Team } from "../../shared/models/team.model";

export const TEAMS_DATA: Team[] = [
    { id: '4', name: 'SHANA TOVAU', pointsAmount: 86, winsAmount: 28, drawsAmount: 2, losesAmount: 4,gamesAmount: 34, goalsFor: 96, goalsAgainst: 33, goalsDifference: 63, captainID: '1231' },
    { id: '1', name: 'Kwincovim', pointsAmount:88, winsAmount: 29, drawsAmount: 1, losesAmount: 4,gamesAmount: 34, goalsFor: 129, goalsAgainst: 38, goalsDifference: 91, captainID:  '15'},
    { id: '2', name: 'Bishbashim', pointsAmount: 74, winsAmount: 23, drawsAmount: 5, losesAmount: 6,gamesAmount: 34, goalsFor: 100, goalsAgainst: 45, goalsDifference: 55, captainID: '4' },
    { id: '6', name: 'Ironi Tiberias', pointsAmount: 62, winsAmount: 19, drawsAmount: 5, losesAmount: 10,gamesAmount: 34, goalsFor: 107, goalsAgainst: 72, goalsDifference: 35,captainID: '6' },
    { id: '8', name: 'FC BROTHERSS', pointsAmount: 60, winsAmount: 19, drawsAmount: 3, losesAmount: 12,gamesAmount: 34, goalsFor: 109, goalsAgainst: 72, goalsDifference: 37, captainID: '25' },
    { id: '13', name: 'Yeshishim', pointsAmount: 56, winsAmount: 17, drawsAmount: 5, losesAmount: 12,gamesAmount: 34, goalsFor: 85, goalsAgainst: 61, goalsDifference: 24, captainID: '1652'},
    { id: '11', name: 'Saba Meir FC', pointsAmount: 53, winsAmount: 17, drawsAmount: 2, losesAmount: 15,gamesAmount: 34, goalsFor: 80, goalsAgainst: 67, goalsDifference: 13, captainID: '1765' },
    { id: '9', name: 'Maccabi Jerusalem', pointsAmount: 52, winsAmount: 16, drawsAmount: 4, losesAmount: 14,gamesAmount: 34, goalsFor: 98, goalsAgainst: 82, goalsDifference: 16, captainID: '3' },
];

export const LEAGUE_TABLE_DISPLAY_COLUMN: Column[] = [
    {
        fieldName:'index',
        displayText: '#'
    },
    {
        fieldName: 'name',
        displayText: 'Name'
    },
    {
        fieldName: 'gamesAmount',
        displayText: 'GP'
    },
    {
        fieldName: 'winsAmount',
        displayText: 'W'
    },
    {
        fieldName: 'drawsAmount',
        displayText: 'D'
    },
    {
        fieldName: 'losesAmount',
        displayText: 'L'
    },
    {
        fieldName: 'goalsFor',
        displayText: 'GF'
    },
    {
        fieldName: 'goalsAgainst',
        displayText: 'GA'
    },
    {
        fieldName: 'goalsDifference',
        displayText: 'DIF'
    },
    {
        fieldName: 'pointsAmount',
        displayText: 'P'
    }

]