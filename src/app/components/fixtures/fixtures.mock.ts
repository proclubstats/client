import { Game } from "../../shared/models/game.model";

export const gamesArray : Game[] = [
    {
        id: 0,
        homeTeamID: 1,
        homeTeamName: "SHANA TOVAU",
        awayTeamID: 2,
        awayTeamName: "Yeshishim",
        homeGoalsAmount: 3,
        awayGoalsAmount: 0,
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 1,
        homeTeamID: 3,
        homeTeamName: "Kwincovim",
        awayTeamID: 4,
        homeGoalsAmount: 2,
        awayGoalsAmount: 2,
        awayTeamName: "Maccabi Jerusalem",
        date: new Date(),
        fixtureNum: 1
    },
    {
        id: 2,
        homeTeamID: 5,
        homeTeamName: "Beitar Jerusalem",
        awayTeamID: 6,
        awayTeamName: "Hijo FC",
        homeGoalsAmount: 5,
        awayGoalsAmount: 1,
        date: new Date(),
        fixtureNum: 1
    },
]