import wordsData from '../data/words.json';
import { Lang, WordEntry } from './types';

const words: WordEntry[] = wordsData;

// Fonction pour obtenir la liste avec gestion du mot manquant (fallback sur l'anglais ou l'ID)
export const getWordList = (lang: Lang): string[] => {
    return words.map(w => w[lang] || w['en'] || w.id);
};