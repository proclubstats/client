import { Column } from "../../shared/models/column.model";
import { ListOption } from "../../shared/models/list-option.model";
import { Player } from "../../shared/models/player.model";

export const PLAYERS_DATA: Player[] = [
    { id: '2', name: 'Kevin De Liran', position: "CAM", goalsAmount: 19, assistsAmount: 31, gamesAmount: 27, teamID: '1', teamName: "Kwincovim"},
    { id: '3', name: 'Ido Suday', position: "RW", goalsAmount: 0, assistsAmount: 25, gamesAmount: 19, teamID: '9', teamName: "Maccabi Jerusalem"},
    { id: '4', name: 'Fisher', position: "RW", goalsAmount: 11, assistsAmount: 18, gamesAmount: 24, teamID: '2', teamName: "Bishbashim" },
    { id: '5', name: 'Botka', position: "RW", goalsAmount: 0, assistsAmount: 15, gamesAmount: 27, teamID: '4', teamName: "SHANA TOVAU" },
    { id: '6', name: 'De Breme', position: "CAM", goalsAmount: 20, assistsAmount: 20, gamesAmount: 25, teamID: '6', teamName: "Ironi Tiberias" },
    { id: '7', name: 'Elharari', position: "RW", goalsAmount: 0, assistsAmount: 13, gamesAmount: 24, teamID: '2', teamName: "Bishbashim" },
    { id: '18', name: 'Dorida', position: "LW", goalsAmount: 0, assistsAmount: 15, gamesAmount: 24, teamID: '4' , teamName: "SHANA TOVAU"},
    { id: '15', name: 'Rakah', position: "ST", goalsAmount: 30, assistsAmount: 16, gamesAmount: 25, teamID: '1', teamName: "Kwincovim" },
    { id: '20', name: 'Capit', position: "RW", goalsAmount: 15, assistsAmount: 9, gamesAmount: 27, teamID: '1', teamName: "Kwincovim" },
    { id: '12', name: 'Turgeman', position: "ST", goalsAmount: 27, assistsAmount: 0, gamesAmount: 25, teamID: '6', teamName: "Ironi Tiberias" },
    { id: '653', name: 'Bruski Jr', position: "RW", goalsAmount: 14, assistsAmount: 0, gamesAmount: 17, teamID: '2', teamName: "Bishbashim" },
    { id: '1231', name: 'Avi Vaknin', position: "ST", goalsAmount: 42, assistsAmount: 1, gamesAmount: 27, teamID: '4', teamName: "SHANA TOVAU" },
    { id: '1765', name: 'Ben Beninho', position: "ST", goalsAmount: 34, assistsAmount: 0, gamesAmount: 25, teamID: '11', teamName: "Saba Meir FC" },
    { id: '1652', name: 'Zlatan', position: "ST", goalsAmount: 18, assistsAmount: 0, gamesAmount: 20, teamID:'13', teamName: "Yeshishim" },
    { id: '1653', name: 'Boccoli', position: "CM", goalsAmount: 0, assistsAmount: 16, gamesAmount: 20, teamID: '13', teamName: "Yeshishim" },
    { id: '1654', name: 'Ilay Tobi', position: "ST", goalsAmount: 15, assistsAmount: 0, gamesAmount: 19, teamID: '9', teamName: "Maccabi Jerusalem" },
    { id: '1232', name: 'Ohad Amir', position: "LW", goalsAmount: 14, assistsAmount: 9, gamesAmount: 17, teamID: '1', teamName: "Kwincovim"},
    { id: '1239', name: 'Liad Injira', position: "RB", goalsAmount: 0, assistsAmount: 13, gamesAmount: 13, teamID: '11', teamName: "Saba Meir FC"},
    { id: '25', name: 'Asi Sitton', position: "ST", goalsAmount: 0, assistsAmount: 0, gamesAmount: 13, teamID: '8', teamName: "FC BROTHERSS"},
    { id: '2544', name: 'Harel Ben Ezra', position: "RB", goalsAmount: 0, assistsAmount: 0, gamesAmount: 0, teamID: '4', teamName: "SHANA TOVAU"},
    { id: '25211', name: 'Amit Reuven', position: "GK", goalsAmount: 0, assistsAmount: 0, gamesAmount: 0, teamID: '4', teamName: "SHANA TOVAU"},
    { id: '252222', name: 'Gil Kagan', position: "CM", goalsAmount: 0, assistsAmount: 0, gamesAmount: 0, teamID: '4', teamName: "SHANA TOVAU"},
    { id: '25444', name: 'Alon Ankin', position: "CAM", goalsAmount: 0, assistsAmount: 0, gamesAmount: 0, teamID: '4', teamName: "SHANA TOVAU"},
    { id: '25221', name: 'Aviv Tal', position: "CB", goalsAmount: 0, assistsAmount: 0, gamesAmount: 0, teamID: '4', teamName: "SHANA TOVAU"},
    { id: '2587', name: 'Eliran Ben Susan', position: "LB", goalsAmount: 0, assistsAmount: 0, gamesAmount: 0, teamID: '4', teamName: "SHANA TOVAU"},
    { id: '2560780', name: 'Tal Bar David', position: "CB", goalsAmount: 0, assistsAmount: 0, gamesAmount: 0, teamID: '4', teamName: "SHANA TOVAU"},
    { id: '256786', name: 'Ram Cohen', position: "CM", goalsAmount: 0, assistsAmount: 0, gamesAmount: 0, teamID: '4', teamName: "SHANA TOVAU"},
    { id: '253452', name: 'Yoni Avrahami', position: "CM", goalsAmount: 0, assistsAmount: 0, gamesAmount: 0, teamID: '4', teamName: "SHANA TOVAU"},
];

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
        fieldName: 'goalsAmount',
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