import type { GameMeta } from "./game.meta";

export const games: GameMeta[] = [
    {
        id: "mauditmotdit",
        title: "Cursed Words",
        emoji: "🙊",
        tagline: "Find the right word... at the right time!",
        description: "Make your friends guess the secret word at just the right time, while they try to find it sooner than you'd like.",
        color: "#B347FF",
        players: "2–20 players",
        duration: "5–60 min",
    },
    {
        id: "imposteur",
        title: "Imposteur",
        emoji: "🕵️",
        tagline: "Unmask the intruder or blend into the crowd!",
        description: "You all have the same word, or almost... Try to unmask the imposter without taking down your allies!",
        color: "#FF3A5C",
        players: "3–12 players",
        duration: "15–30 min",
    },
];