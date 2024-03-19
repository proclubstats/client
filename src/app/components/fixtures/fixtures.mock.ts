import { Fixture } from "../../shared/models/game.model";
import { PlayerStat } from "../../shared/models/player-stat.model";

export const gamesArray: Fixture[] = [
    {
        id: 0,
        homeTeamDetails: { teamID: '1', teamName: 'Kwincovim', teamGoalsAmount: 3 },
        awayTeamDetails: { teamID: '2', teamName: 'SHANA TOVAU', teamGoalsAmount: 2 },
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 1,
        homeTeamDetails: {
            teamID: '1', teamName: 'Kwincovim', teamGoalsAmount: 2, teamScorers: [
                { playerId: '2', playerStatsAmount: 1 }, { playerId: '15', playerStatsAmount: 1 }
            ],
            teamAssists: [
                { playerId: '1232', playerStatsAmount: 1 }, { playerId: '1239', playerStatsAmount: 1 }
            ]
        },
        awayTeamDetails: {
            teamID: '1', teamName: 'SHANA TOVAU', teamGoalsAmount: 3, teamScorers: [
                { playerId: '252222', playerStatsAmount: 1 }, { playerId: '1231', playerStatsAmount: 2 }
            ],
            teamAssists: [
                { playerId: '2544', playerStatsAmount: 1 }, { playerId: '25444', playerStatsAmount: 2 }
            ]
        },
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 2,
        homeTeamDetails: { teamID: '1', teamName: 'Kwincovim', teamGoalsAmount: 3 },
        awayTeamDetails: { teamID: '2', teamName: 'SHANA TOVAU', teamGoalsAmount: 2 },
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 3,
        homeTeamDetails: { teamID: '1', teamName: 'Kwincovim', teamGoalsAmount: 3 },
        awayTeamDetails: { teamID: '2', teamName: 'SHANA TOVAU', teamGoalsAmount: 2 },
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 4,
        homeTeamDetails: { teamID: '1', teamName: 'Kwincovim', teamGoalsAmount: 3 },
        awayTeamDetails: { teamID: '2', teamName: 'SHANA TOVAU', teamGoalsAmount: 2 },
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 6,
        homeTeamDetails: { teamID: '1', teamName: 'Kwincovim', teamGoalsAmount: 3 },
        awayTeamDetails: { teamID: '2', teamName: 'SHANA TOVAU', teamGoalsAmount: 2 },
        date: new Date(),
        fixtureNum: 1
    },
]