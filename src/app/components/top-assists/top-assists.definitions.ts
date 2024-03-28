import { Column } from "../../shared/models/column.model";

export const LEAGUE_TABLE_DISPLAY_COLUMN: Column[] = [
    {
        fieldName: 'index',
        displayText: '#'
    },
    {
        fieldName: 'name',
        displayText: 'Player Name'
    },
    {
        fieldName: 'teamName',
        displayText: 'Team Name'
    },
    {
        fieldName: 'assists',
        displayText: 'Assists'
    },
    {
        fieldName: 'gamesAmount',
        displayText: 'Games'
    },
    {
        fieldName: 'apg',
        displayText: 'ApG'
    }
]