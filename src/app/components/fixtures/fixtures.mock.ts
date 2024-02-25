import { Game } from "../../shared/models/game.model";

export const gamesArray : Game[] = [
    {
        id: 0,
        homeTeamID: 1,
        homeTeamName: "Super Strike",
        awayTeamID: 2,
        awayTeamName: "Beitar Jerusalem",
        homeGoalsAmount: 3,
        awayGoalsAmount: 0,
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 1,
        homeTeamID: 3,
        homeTeamName: "SHANA TOVAU",
        awayTeamID: 4,
        homeGoalsAmount: 2,
        awayGoalsAmount: 2,
        awayTeamName: "AOTISTIM FC",
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 2,
        homeTeamID: 5,
        homeTeamName: "SHANA TOVAU",
        awayTeamID: 6,
        awayTeamName: "Maccabi Jerusalem",
        homeGoalsAmount: 5,
        awayGoalsAmount: 1,
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 3,
        homeTeamID: 5,
        homeTeamName: "ISRAEL1010",
        awayTeamID: 6,
        awayTeamName: "AOTISTIM FC",
        homeGoalsAmount: 5,
        awayGoalsAmount: 1,
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 4,
        homeTeamID: 5,
        homeTeamName: "Beitar Jerusalem",
        awayTeamID: 6,
        awayTeamName: "Bnei Yehuda",
        homeGoalsAmount: 5,
        awayGoalsAmount: 1,
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 4,
        homeTeamID: 5,
        homeTeamName: "SHANA TOVAU",
        awayTeamID: 6,
        awayTeamName: "Kenzi And Benio",
        homeGoalsAmount: 5,
        awayGoalsAmount: 1,
        date: new Date(),
        fixtureNum: 1
    },
]