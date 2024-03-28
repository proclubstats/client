import { Column } from "../../shared/models/column.model";
import { ListOption } from "../../shared/models/list-option.model";

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
    fieldName: 'position',
    displayText: 'Position'
  },
  {
    fieldName: 'teamName',
    displayText: 'Team Name'
  },
  {
    fieldName: 'goalsScored',
    displayText: 'Goals'
  },
  {
    fieldName: 'gamesAmount',
    displayText: 'Games'
  },
  {
    fieldName: 'gpg',
    displayText: 'GpG'
  }
];

export const PLAYABLE_POSITIONS_OPTIONS: ListOption[] = [
  {
    value: 'GK',
    displayText: 'GK'
  },
  {
    value: 'RB',
    displayText: 'RB'
  },
  {
    value: 'RWB',
    displayText: 'RWB'
  },
  {
    value: 'CB',
    displayText: 'CB'
  },
  {
    value: 'LB',
    displayText: 'LB'
  },
  {
    value: 'LWB',
    displayText: 'LWB'
  },
  {
    value: 'CDM',
    displayText: 'CDM'
  },
  {
    value: 'CM',
    displayText: 'CM'
  },
  {
    value: 'CAM',
    displayText: 'CAM'
  },
  {
    value: 'CF',
    displayText: 'CF'
  },
  {
    value: 'ST',
    displayText: 'ST'
  },
  {
    value: 'RF',
    displayText: 'RF'
  },
  {
    value: 'LF',
    displayText: 'LF'
  },
  {
    value: 'RW',
    displayText: 'RW'
  },
  {
    value: 'LW',
    displayText: 'LW'
  },
]