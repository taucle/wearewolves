import React, { useState } from 'react';
import { Button } from '@workspace/ui';
import { saveScore, getScore } from '@workspace/game-engine';

export const CarteGame = () => {
    const [score, setScore] = useState(getScore('cartes'));

    const drawCard = () => {
        const newScore = score + 1;
        setScore(newScore);
        saveScore('cartes', newScore);
    };

    return (
        <div>
        <h2>Jeu de Cartes</h2>
        <p>Cartes tirées : {score}</p>
        <Button onClick={drawCard}>Piocher</Button>
        </div>
    );
};