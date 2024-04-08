import { Column, DataType } from "../../shared/models/column.model";

export const TOP_ASSISTS_COLUMNS: Column[] = [
    {
        fieldName: 'index',
        displayText: '#'
    },
    {
        fieldName: 'tableIcon',
        displayText: 'Player Name',
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
];

export const SHORTENED_TOP_ASSISTS_COLUMNS: Column[] = [
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
      fieldName: 'assists',
      displayText: 'Assists'
    },
    {
      fieldName: 'games',
      displayText: 'Games'
    }
  ];