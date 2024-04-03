import { Column } from "../../shared/models/column.model";

export const TOP_ASSISTS_COLUMNS: Column[] = [
    {
        fieldName: 'index',
        displayText: '#'
    },
    {
        fieldName: 'playerName',
        displayText: 'Player Name'
    },
    {
        fieldName: 'position',
        displayText: 'Position'
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
        fieldName: 'games',
        displayText: 'Games'
    },
    {
        fieldName: 'assistsPerGame',
        displayText: 'ApG'
    }
]