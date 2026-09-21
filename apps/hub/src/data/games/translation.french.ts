import type { GameMeta } from "./game.meta";

export const games: GameMeta[] = [
    {
        id: "mauditmotdit",
        title: "Maudit Mot Dit",
        emoji: "🙊",
        tagline: "Retrouvez le bon mot... au bon moment !",
        description: "Faites deviner le mot choisi à vos amis au bon moment, ils tenteront de le découvrir plus tôt que vous le souhaitez.",
        color: "#B347FF",
        players: "2–20 joueurs",
        duration: "5–60 min",
    },
    {
        id: "imposteur",
        title: "Imposteur",
        emoji: "🕵️",
        tagline: "Démasquez l'intrus ou fondez-vous dans la masse !",
        description: "Vous avez tous le même mot, ou presque... Tentez de démasquer l'imposteur sans éliminer vos aliés !",
        color: "#FF3A5C",
        players: "3–12 joueurs",
        duration: "15–30 min",
    },
    {
        id: "puissance4",
        title: "Puissance 4",
        emoji: "🧮",
        tagline: "Alignez vos jetons et remportez la partie !",
        description: "Affrontez votre adversaire dans ce jeu classique de stratégie et de réflexion. Alignez quatre jetons de votre couleur pour gagner !",
        color: "#FFD60A",
        players: "2 joueurs",
        duration: "5 min",
    },
    {
        id: "morpion",
        title: "Morpion",
        emoji: "⭕",
        tagline: "Alignez vos pions et remportez la partie !",
        description: "Affrontez votre adversaire dans ce jeu classique de stratégie et de réflexion. Alignez trois pions de votre couleur pour gagner !",
        color: "#00E88F",
        players: "2 joueurs",
        duration: "2 min",
    },
];