export const saveScore = (game: string, score: number) => {
    localStorage.setItem(`score_${game}`, score.toString());
};

export const getScore = (game: string): number => {
    return Number(localStorage.getItem(`score_${game}`) || 0);
};