import { Column } from "../../shared/models/column.model";
import { ListOption } from "../../shared/models/list-option.model";
import { Player } from "../../shared/models/player.model";

export const PLAYERS_DATA: Player[] = [
    { id: '1', name: 'Roei Cohen', goalsAmount: 11, assistsAmount: 32, gamesAmount: 19, teamID: 1, teamName: "Beitar Jerusalem"},
    { id: '2', name: 'Kevin De Liran', goalsAmount: 15, assistsAmount: 27, gamesAmount: 16, teamID: 1, teamName: "Kwincovim"},
    { id: '3', name: 'Ido Suday', goalsAmount: 0, assistsAmount: 21, gamesAmount: 13, teamID: 1, teamName: "Maccabi Jerusalem"},
    { id: '4', name: 'Fisher', goalsAmount: 11, assistsAmount: 16, gamesAmount: 18, teamID: 1, teamName: "Bishbashim" },
    { id: '5', name: 'Botka', goalsAmount: 0, assistsAmount: 12, gamesAmount: 18, teamID: 1, teamName: "SHANA TOVAU" },
    { id: '6', name: 'De Breme', goalsAmount: 17, assistsAmount: 11, gamesAmount: 19, teamID: 1, teamName: "Ironi Tiberias" },
    { id: '7', name: 'Tzuma', goalsAmount: 0, assistsAmount: 10, gamesAmount: 18, teamID: 1, teamName: "Bishbashim" },
    { id: '18', name: 'Dorida', goalsAmount: 0, assistsAmount: 10, gamesAmount: 15, teamID: 1 , teamName: "SHANA TOVAU"},
    { id: '15', name: 'Rakah', goalsAmount: 21, assistsAmount: 9, gamesAmount: 18, teamID: 1, teamName: "Kwincovim" },
    { id: '12', name: 'Turgeman', goalsAmount: 19, assistsAmount: 0, gamesAmount: 19, teamID: 1, teamName: "Ironi Tiberias" },
    { id: '13', name: 'Burat', goalsAmount: 25, assistsAmount: 0, gamesAmount: 8, teamID: 1, teamName: "Beitar Jerusalem" },
    { id: '14', name: 'Sahar', goalsAmount: 13, assistsAmount: 0, gamesAmount: 9, teamID: 1, teamName: "Beitar Jerusalem" },
    { id: '653', name: 'Bruski', goalsAmount: 12, assistsAmount: 0, gamesAmount: 18, teamID: 1, teamName: "Bnei Rineh" },
    { id: '1231', name: 'Avi Vaknin', goalsAmount: 27, assistsAmount: 1, gamesAmount: 18, teamID: 1, teamName: "SHANA TOVAU" },
    { id: '1765', name: 'Ben Beninho', goalsAmount: 20, assistsAmount: 0, gamesAmount: 16, teamID: 1, teamName: "Kwincovim" },
    { id: '1657', name: 'Benzema', goalsAmount: 21, assistsAmount: 0, gamesAmount: 11, teamID: 1, teamName: "Bnei Yehuda" },
    { id: '1239', name: 'Lidor', goalsAmount: 0, assistsAmount: 9, gamesAmount: 16, teamID: 1, teamName: "Beitar Jerusalem"}
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
      value: 0,
      displayText: 'GK'
    },
    {
      value: 1,
      displayText: 'RB'
    },
    {
      value: 2,
      displayText: 'RWB'
    },
    {
      value: 3,
      displayText: 'CB'
    },
    {
      value: 4,
      displayText: 'LB'
    },
    {
      value: 5,
      displayText: 'LWB'
    },
    {
      value: 6,
      displayText: 'CDM'
    },
    {
      value: 7,
      displayText: 'CM'
    },
    {
      value: 8,
      displayText: 'CAM'
    },
    {
      value: 9,
      displayText: 'CF'
    },
    {
      value: 10,
      displayText: 'ST'
    },
    {
      value: 11,
      displayText: 'RF'
    },
    {
      value: 12,
      displayText: 'LF'
    },
    {
      value: 13,
      displayText: 'RW'
    },
    {
      value: 14,
      displayText: 'LW'
    },
  ]