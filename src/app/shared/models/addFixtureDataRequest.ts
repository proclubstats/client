export type AddFixtureDataRequest = {
    startDate: Date;
    endDate: Date;
    round: number;
    games: { homeTeamId: string, awayTeamId: string }[]
}