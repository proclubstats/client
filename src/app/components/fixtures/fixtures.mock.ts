import { Fixture } from "../../shared/models/game.model";

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
            teamID: '65ff46d662846e1d7457ae7f', teamName: 'Kwincovim', teamGoalsAmount: 2, teamScorers: [
                { playerId: '660546612047cc1c6b0d2852', playerStatsAmount: 1 }, { playerId: '66051d33fe92516e9b75c1bc', playerStatsAmount: 1 }
            ],
            teamAssists: [
                { playerId: '66051d33fe92516e9b75c1bc', playerStatsAmount: 1 }, { playerId: '660546612047cc1c6b0d2852', playerStatsAmount: 1 }
            ]
        },
        awayTeamDetails: {
            teamID: '65fb22d3a3cead99b30aa54d', teamName: 'SHANA TOVAU', teamGoalsAmount: 3, teamScorers: [
                { playerId: '65fb22f2a3cead99b30aa556', playerStatsAmount: 1 }, { playerId: '66029446a7b6303c8031bdfc', playerStatsAmount: 2 }
            ],
            teamAssists: [
                { playerId: '66029446a7b6303c8031bdfc', playerStatsAmount: 1 }, { playerId: '65fb22f2a3cead99b30aa556', playerStatsAmount: 2 }
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