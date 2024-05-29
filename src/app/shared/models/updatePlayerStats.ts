export type UpdatePlayerStatsRequestModel = {
    playerId: string;
    rating : number;
    goals?: number;
    assists?: number;
}