export type AddPlayerDataRequest = {
    name: string;
    phone?: string;
    imgUrl?: string;
    age: number;
    teamId: string;
    position: string;
    playablePositions: string[];
};