import { Column } from "../../shared/models/column.model";
import { Team } from "../../shared/models/team.model";

export const ELEMENT_DATA: Team[] = [
    { id: 4, name: 'SHANA TOVAU', pointsAmount: 73, winsAmount: 24, drawsAmount: 1, losesAmount: 3,gamesAmount: 28, goalsFor: 79, goalsAgainst: 25, goalsDifference: 54, adminID: 1 },
    { id: 1, name: 'Kwincovim', pointsAmount:67, winsAmount: 22, drawsAmount: 1, losesAmount: 3,gamesAmount: 26, goalsFor: 103, goalsAgainst: 31, goalsDifference: 72 },
    { id: 2, name: 'Bishbashim', pointsAmount: 61, winsAmount: 19, drawsAmount: 4, losesAmount: 4,gamesAmount: 27, goalsFor: 84, goalsAgainst: 35, goalsDifference: 49 },
    { id: 3, name: 'Beitar Jerusalem', pointsAmount: 70, winsAmount: 23, drawsAmount: 1, losesAmount: 5,gamesAmount: 29, goalsFor: 104, goalsAgainst: 55, goalsDifference: 49 },
    { id: 6, name: 'Ironi Tiberias', pointsAmount: 44, winsAmount: 13, drawsAmount: 5, losesAmount: 9,gamesAmount: 27, goalsFor: 83, goalsAgainst: 62, goalsDifference: 21 },
    { id: 8, name: 'FC BROTHERS', pointsAmount: 48, winsAmount: 15, drawsAmount: 3, losesAmount: 10,gamesAmount: 28, goalsFor: 94, goalsAgainst: 62, goalsDifference: 32 },
    { id: 9, name: 'Maccabi Jerusalem', pointsAmount: 45, winsAmount: 14, drawsAmount: 3, losesAmount: 12,gamesAmount: 29, goalsFor: 87, goalsAgainst: 68, goalsDifference: 19 },
    { id: 11, name: 'Saba Meir FC', pointsAmount: 50, winsAmount: 16, drawsAmount: 2, losesAmount: 12,gamesAmount: 30, goalsFor: 77, goalsAgainst: 62, goalsDifference: 15 },
    { id: 13, name: 'Yeshishim', pointsAmount: 35, winsAmount: 10, drawsAmount: 5, losesAmount: 10,gamesAmount: 25, goalsFor: 53, goalsAgainst: 48, goalsDifference: 5 },
    { id: 14, name: 'The Killers', pointsAmount: 28, winsAmount: 8, drawsAmount: 4, losesAmount: 14,gamesAmount: 26, goalsFor: 41, goalsAgainst: 79, goalsDifference: -36 },
    { id: 15, name: 'Cristal Nargila', pointsAmount: 22, winsAmount: 7, drawsAmount: 1, losesAmount: 19,gamesAmount: 27, goalsFor: 48, goalsAgainst: 94, goalsDifference: -46 },
    { id: 16, name: 'Israel1010', pointsAmount: 22, winsAmount: 7, drawsAmount: 1, losesAmount: 19,gamesAmount: 27, goalsFor: 47, goalsAgainst: 114, goalsDifference: -67 },
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