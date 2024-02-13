import { Column } from "../../shared/models/column.model";
import { Player } from "../../shared/models/player.model";

export const ELEMENT_DATA: Player[] = [
    { id: 1, name: 'Avi', goalsAmount: 20, assistsAmount: 0, gamesAmount: 12, teamID: 1 },
    { id: 1, name: 'Avi', goalsAmount: 20, assistsAmount: 0, gamesAmount: 12, teamID: 1 },
    { id: 1, name: 'Avi', goalsAmount: 20, assistsAmount: 0, gamesAmount: 12, teamID: 1 },
    { id: 1, name: 'Avi', goalsAmount: 20, assistsAmount: 0, gamesAmount: 12, teamID: 1 },
    { id: 1, name: 'Avi', goalsAmount: 20, assistsAmount: 0, gamesAmount: 12, teamID: 1 },
    { id: 1, name: 'Avi', goalsAmount: 20, assistsAmount: 0, gamesAmount: 12, teamID: 1 },
    { id: 1, name: 'Avi', goalsAmount: 20, assistsAmount: 0, gamesAmount: 12, teamID: 1 },
    { id: 1, name: 'Avi', goalsAmount: 20, assistsAmount: 0, gamesAmount: 12, teamID: 1 },
    { id: 1, name: 'Avi', goalsAmount: 20, assistsAmount: 0, gamesAmount: 12, teamID: 1 }

];

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
        fieldName: 'goalsAmount',
        displayText: 'Goals'
    }
]