export type AddPlayerDataRequest = {
    name: string;
    phone?: string;
    age: number;
    teamId: string;
    position: string;
    playablePositions: string[];
};