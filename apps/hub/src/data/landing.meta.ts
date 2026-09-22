export type GameId = 
    'mauditmotdit' | 
    'imposteur' | 
    'puissance4' | 
    'morpion' |
    'assistant-loup' |
    'assistant-vampire';

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

export interface Language {
    id: string;
    flag: string;
    file: string;
}

export const AvailableLanguages: Language[] = [
    { id: 'fr', flag: 'fr', file: 'french'},
    { id: 'en', flag: 'gb', file: 'english'},
    //{ id: 'es', flag: 'es', file: 'spanish'},
    //{ id: 'de', flag: 'de', file: 'german'},
]

export interface LandingPageMeta {
    logoText: string;
    heroTitleBegining: string;
    heroTitleHighlight: string;
    heroTitleEnding: string;
    heroDescription: string;
    heroCTA: string;
    statsGamesAvailable: string;
    statsCardsAvailable: string;
    statsFunGaranty: string;
    statsOffline: string;
    gamesTitle: string;
    gamesSubtitle: string;
    hiwTitle: string;
    hiwPart1Title: string;
    hiwPart1Description: string;
    hiwPart2Title: string;
    hiwPart2Description: string;
    hiwPart3Title: string;
    hiwPart3Description: string;
}
