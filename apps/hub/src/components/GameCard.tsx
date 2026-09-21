import React from 'react';
import type { GameMeta } from '../data/landing.meta';
import './GameCard.css';

export function GameCard({ game, onClick }: { game: GameMeta; onClick: () => void }) {
    const dynamicStyles = {
        '--accent-color': game.color,
        '--shadow-color': `${game.color}28`,
        '--bg-icon-color': `${game.color}18`,
    } as React.CSSProperties;

    return (
        <button onClick={onClick} className="game-card font-body" style={dynamicStyles}>
            <div className="game-icon">{game.emoji}</div>
            <div className="game-title font-display">{game.title}</div>
            <div className="game-tagline">{game.tagline}</div>
            <p className="game-description">{game.description}</p>

            <div className="game-meta">
                <span>👥 {game.players}</span>
                <span>⏱ {game.duration}</span>
            </div>

            <div className="game-cta">
                Jouer <span>→</span>
            </div>
        </button>
    );
}