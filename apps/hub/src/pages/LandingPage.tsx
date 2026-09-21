import { BackgroundShapes } from '../components/BackgroundShapes'

import { GameCard } from '../components/GameCard';

import type { GameId } from '../data/games/game.meta';
import { games } from '../data/games/translation.french';


import './LandingPage.css';

/*
interface LandingPageProps {
    games: GameMeta[];
}*/

interface Props {
    onNavigate: (id: GameId) => void;
}

export default function LandingPage({ onNavigate }: Props) {

    return (
        <div className="landing-container">

            {/* Background */}
            <BackgroundShapes />

            <div className="hero-wrapper">
                
                {/* Header */}
                <header className="landing-header">
                    <div className="landing-logo">
                        <span className="logo-icon">🎮</span>
                        <span className="logo-text font-display">La Boîte à Jeux</span>
                    </div>
                    <nav className="landing-nav">
                        {games.map((g) => (
                            <button
                                key={g.id}
                                onClick={() => onNavigate(g.id)}
                                className="landing-nav-link"
                            >
                                {g.title}
                            </button>
                        ))}
                    </nav>
                </header>

                {/* Hero */}
                <section className="hero-section">
                    {/*
                <div className="hero-badge">
                    <span>✨</span> Soirée entre amis
                </div>
                */}
                    <h1 className="hero-title font-display">
                        Des jeux pour <br className="hero-br" />
                        <br />
                        <span className="hero-highlight">animer</span>
                        <br />
                        vos soirées
                    </h1>
                    <p className="hero-description">
                        {games.length} jeux hors connexion pour animer vos soirées entre amis. Aucun matériel requis.
                    </p>
                    <button
                        onClick={() => {
                            document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hero-cta"
                    >
                        Découvrir les jeux ↓
                    </button>
                </section>

                {/* Stats bar */}
                <div className="stats-bar">
                    <div className="stats-inner">
                        {[
                            { value: '4', label: 'jeux disponibles' },
                            { value: '100+', label: 'cartes & questions' },
                            { value: '∞', label: 'fous rires garantis' },
                            { value: '0', label: 'connexion requise' },
                        ].map((stat) => (
                            <div key={stat.label} className="stat-item">
                                <div className="stat-value font-display">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            

            {/* Games section */}
            <section id="games" className="games-section">
                <div className="section-container">
                    <div className="games-header">
                        <h2 className="section-title font-display">Les jeux</h2>
                        <p className="section-subtitle">Tapez sur un jeu pour commencer</p>
                    </div>

                    {/* Grid (Desktop) */}
                    <div className="games-grid">
                        {games.map((game) => (
                            <GameCard key={game.id} game={game} onClick={() => onNavigate(game.id)} />
                        ))}
                    </div>

                    {/* Horizontal scroll (Mobile) */}
                    <div className="games-scroll-mobile">
                        {games.map((game) => (
                            <div key={game.id} className="games-scroll-item">
                                <GameCard game={game} onClick={() => onNavigate(game.id)} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="how-it-works-section">
                <div className="section-container">
                    <h2 className="section-title text-center font-display">Comment ça marche ?</h2>
                    <div className="steps-grid">
                        {[
                            { step: '01', title: 'Choisissez un jeu', desc: "Parcourez les 4 jeux disponibles et choisissez celui qui correspond à l'ambiance du moment.", color: '#FF3A5C' },
                            { step: '02', title: 'Lisez les règles', desc: 'Chaque jeu possède sa propre page avec les règles détaillées. Expliquez-les en 30 secondes au groupe.', color: '#B347FF' },
                            { step: '03', title: 'Jouez & riez', desc: "C'est parti ! Pas besoin de connexion, de dés ou de plateau. Juste vos amis et votre téléphone ou ordinateur.", color: '#00E88F' },
                        ].map((item) => (
                            <div key={item.step} className="step-card">
                                <div className="step-number font-display" style={{ color: item.color }}>
                                    {item.step}
                                </div>
                                <h3 className="step-title font-display">{item.title}</h3>
                                <p className="step-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <p className="footer-text">
                    <span className="footer-brand font-display">La Boîte à Jeux</span> — Fait avec ❤️ pour vos soirées
                </p>
            </footer>
        </div>
    );
}