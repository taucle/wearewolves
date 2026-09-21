export type GameId = 'mauditmotdit' | 'imposteur' | 'puissance4' | 'morpion';

export interface GameMeta {
    id: GameId;
    title: string;
    emoji: string;
    tagline: string;
    description: string;
    color: string;
    players: string;
    duration: string;
}
