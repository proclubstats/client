import { Column } from "../../shared/models/column.model";

export const LEAGUE_TABLE_DISPLAY_COLUMN: Column[] = [
    {
        fieldName: 'name',
        displayText: 'Name'
    },
    {
        fieldName: 'teamID',
        displayText: 'Team ID'
    },
    {
        fieldName: 'assistsAmount',
        displayText: 'Assists'
    }
]