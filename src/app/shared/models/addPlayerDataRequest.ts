export type AddPlayerDataRequest = {
    name: string;
    phone?: string;
    age: number;
    position: string;
    playablePositions: string[];
};