export class PlayerStat {
    playerId: string;
    playerName: string;
    playerImgUrl? : string;
    playerStatsAmount: number = 0;

    constructor() {
        this.playerId = '';
        this.playerName = '';
        this.playerStatsAmount = 0;
    }
}

export interface PlayerStatsForDisplay {
    playerId: string;
    playerAssists: number;
    playerGoals: number;
}