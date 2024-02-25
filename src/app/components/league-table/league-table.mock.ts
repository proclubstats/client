import { Column } from "../../shared/models/column.model";
import { Team } from "../../shared/models/team.model";

export const ELEMENT_DATA: Team[] = [
    { id: 4, name: 'SHANA TOVAU', pointsAmount: 51, winsAmount: 17, drawsAmount: 0, losesAmount: 3,gamesAmount: 20, goalsFor: 54, goalsAgainst: 22, goalsDifference: 32 },
    { id: 1, name: 'Kwincovim', pointsAmount:49, winsAmount: 16, drawsAmount: 1, losesAmount: 3,gamesAmount: 20, goalsFor: 80, goalsAgainst: 25, goalsDifference: 55 },
    { id: 2, name: 'Bishbashim', pointsAmount: 47, winsAmount: 15, drawsAmount: 2, losesAmount: 3,gamesAmount: 20, goalsFor: 64, goalsAgainst: 25, goalsDifference: 39 },
    { id: 3, name: 'Beitar Jerusalem', pointsAmount: 49, winsAmount: 16, drawsAmount: 1, losesAmount: 3,gamesAmount: 20, goalsFor: 79, goalsAgainst: 46, goalsDifference: 33 },
    { id: 6, name: 'Ironi Tiberias', pointsAmount: 37, winsAmount: 11, drawsAmount: 4, losesAmount: 5,gamesAmount: 20, goalsFor: 70, goalsAgainst: 45, goalsDifference: 25 },
    { id: 5, name: 'Bnei Reine', pointsAmount: 35, winsAmount: 11, drawsAmount: 2, losesAmount: 7,gamesAmount: 20, goalsFor: 37, goalsAgainst: 34, goalsDifference: 3 },
    { id: 10, name: 'Kenzi And Benio', pointsAmount: 34, winsAmount: 11, drawsAmount: 1, losesAmount: 8,gamesAmount: 20, goalsFor: 69, goalsAgainst: 60, goalsDifference: 9 },
    { id: 7, name: 'Beitar Tubruk', pointsAmount: 28, winsAmount: 8, drawsAmount: 4, losesAmount: 8,gamesAmount: 20, goalsFor: 62, goalsAgainst: 45, goalsDifference: 17 },
    { id: 8, name: 'FC BROTHERS', pointsAmount: 29, winsAmount: 9, drawsAmount: 2, losesAmount: 9,gamesAmount: 20, goalsFor: 69, goalsAgainst: 54, goalsDifference: 15 },
    { id: 9, name: 'Maccabi Jerusalem', pointsAmount: 26, winsAmount: 8, drawsAmount: 2, losesAmount: 10,gamesAmount: 20, goalsFor: 59, goalsAgainst: 56, goalsDifference: 3 },
    { id: 11, name: 'Hijo FC', pointsAmount: 20, winsAmount: 6, drawsAmount: 2, losesAmount: 12,gamesAmount: 20, goalsFor: 39, goalsAgainst: 52, goalsDifference: -13 },
    { id: 12, name: 'Bnei Yehuda', pointsAmount: 25, winsAmount: 7, drawsAmount: 4, losesAmount: 9,gamesAmount: 20, goalsFor: 48, goalsAgainst: 52, goalsDifference: -4 },
    { id: 13, name: 'Yeshishim', pointsAmount: 20, winsAmount: 5, drawsAmount: 5, losesAmount: 10,gamesAmount: 20, goalsFor: 39, goalsAgainst: 48, goalsDifference: -9 },
    { id: 14, name: 'Super Strike', pointsAmount: 20, winsAmount: 6, drawsAmount: 2, losesAmount: 12,gamesAmount: 20, goalsFor: 35, goalsAgainst: 69, goalsDifference: -34 },
    { id: 15, name: 'Cristal Nargila', pointsAmount: 10, winsAmount: 3, drawsAmount: 1, losesAmount: 16,gamesAmount: 20, goalsFor: 33, goalsAgainst: 76, goalsDifference: -43 },
    { id: 16, name: 'Israel1010', pointsAmount: 10, winsAmount: 3, drawsAmount: 1, losesAmount: 16,gamesAmount: 20, goalsFor: 30, goalsAgainst: 98, goalsDifference: -68 },
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