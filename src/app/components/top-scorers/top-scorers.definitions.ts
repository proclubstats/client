import { Column, DataType } from "../../shared/models/column.model";
import { ListOption } from "../../shared/models/list-option.model";

export const TOP_SCORERS_COLUMNS: Column[] = [
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
    fieldName: 'position',
    displayText: 'Position'
  },
  {
    fieldName: 'teamName',
    displayText: 'Team Name'
  },
  {
    fieldName: 'goals',
    displayText: 'Goals'
  },
  {
    fieldName: 'games',
    displayText: 'Games'
  },
  {
    fieldName: 'goalsPerGame',
    displayText: 'GpG'
  }
];

export const SHORTENED_TOP_SCORERS_COLUMNS: Column[] = [
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
    fieldName: 'teamName',
    displayText: 'Team'
  },
  {
    fieldName: 'goals',
    displayText: 'Goals'
  },
  {
    fieldName: 'games',
    displayText: 'Games'
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
    value: 'RM',
    displayText: 'RM'
  },
  {
    value: 'LM',
    displayText: 'LM'
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