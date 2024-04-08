export type TopAssister = {
    playerId: string;
    playerName: string;
    teamId: string;
    teamName: string;
    position: string;
    playerImgUrl?: string;
    games: number;
    assists: number;
    assistsPerGame: number;
    tableIcon? :  {
        name: string;
        imgUrl: string;
        isTeam: boolean;
    }
};  