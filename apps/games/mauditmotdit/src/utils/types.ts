export type Lang = 'fr' | 'en' | 'de';

export interface WordEntry {
    id: string;
    [key: string]: string;
}