import { Column, DataType } from "../../shared/models/column.model";
import { LeagueTableRow } from "../../shared/models/leagueTableTeam";

export const LEAGUE_TABLE_DISPLAY_COLUMN: Column[] = [
    {
        fieldName: 'index',
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
        fieldName: 'index',
        displayText: '#'
    },
    {
        fieldName: 'tableIcon',
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

];


export const leagueSortColumns = [
    { column: 'points', direction: 'asc' },
    { column: 'goalDifference', direction: 'asc' },
    { column: 'goalsScored', direction: 'asc' }
];