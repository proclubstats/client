export type TopScorer = {
    playerId: string;
    playerName: string;
    teamId: string;
    teamName: string;
    position: string;
    playerImgUrl?: string;
    games: number;
    goals: number;
    goalsPerGame: number;
};