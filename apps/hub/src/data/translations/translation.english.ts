import type { GameMeta, LandingPageMeta } from "../landing.meta";

export const landingPageMeta: LandingPageMeta = {
    logoText: "La Boîte à Jeux",
    heroTitleBegining: "Games to",
    heroTitleHighlight: "liven up",
    heroTitleEnding: "your parties",
    heroDescription: "offline games to liven up your evenings with friends. No materials required.",
    heroCTA: "Discover the games",
    statsGamesAvailable: "games available",
    statsCardsAvailable: "cards and questions",
    statsFunGaranty: "fun guaranteed",
    statsOffline: "offline play",
    gamesTitle: "The Games",
    gamesSubtitle: "Tap on a game to get started",
    hiwTitle: "How It Works",
    hiwPart1Title: "Choose a Game",
    hiwPart1Description: "Browse the 4 available games and choose the one that fits the mood of the moment.",
    hiwPart2Title: "Read the Rules",
    hiwPart2Description: "Each game has its own page with detailed rules. Explain them in 30 seconds to the group.",
    hiwPart3Title: "Play & Laugh",
    hiwPart3Description: "Let's go! No need for internet connection, dice, or board. Just your friends and your phone or computer."
};

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