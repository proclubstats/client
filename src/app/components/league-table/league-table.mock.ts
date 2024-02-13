import { Column } from "../../shared/models/column.model";
import { Team } from "../../shared/models/team.model";

export const ELEMENT_DATA: Team[] = [
    { id: 1, name: 'Hydrogen', pointsAmount: 10, winsAmount: 3, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
    { id: 2, name: 'Helium', pointsAmount: 10, winsAmount: 3, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
    { id: 3, name: 'Lithium', pointsAmount: 7, winsAmount: 2, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
    { id: 4, name: 'Beryllium', pointsAmount: 4, winsAmount: 1, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
    { id: 5, name: 'Boron', pointsAmount: 4, winsAmount: 1, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
    { id: 6, name: 'Carbon', pointsAmount: 7, winsAmount: 2, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
    { id: 7, name: 'Nitrogen', pointsAmount: 4, winsAmount: 1, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
    { id: 8, name: 'Oxygen', pointsAmount: 10, winsAmount: 3, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
    { id: 9, name: 'Fluorine', pointsAmount: 7, winsAmount: 2, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
    { id: 10, name: 'Neon', pointsAmount: 7, winsAmount: 2, drawsAmount: 1, losesAmount: 0, goalsFor: 40, goalsAgainst: 20 },
];

export const LEAGUE_TABLE_DISPLAY_COLUMN: Column[] = [
    {
        fieldName: 'name',
        displayText: 'Name'
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
        fieldName: 'pointsAmount',
        displayText: 'P'
    }

]