import { useState } from 'react';

import { BackgroundShapes } from '../components/BackgroundShapes';
import { GameCard } from '../components/GameCard';
import { AvailableLanguages, type GameId, type Language } from '../data/landing.meta';

import * as fr from '../data/translations/translation.french';
import * as en from '../data/translations/translation.english';


import './LandingPage.css';


const translations: Record<string, typeof fr> = {
    fr,
    en,
};

export default function LandingPage({ onNavigate }: { onNavigate: (id: GameId) => void }) {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState<Language>(AvailableLanguages[0]);

    const { games, landingPageMeta } = translations[currentLang.id] || translations.en || translations.fr;

    const otherLanguages = AvailableLanguages.filter((l) => l.id !== currentLang.id);

    const handleSelect = (lang: Language) => {
        setCurrentLang(lang);
        setIsLangOpen(false);
    };


    return (
        <div className="landing-container">

            {/* Background */}
            <BackgroundShapes />

            <div className="hero-wrapper">

                {/* Header */}
                <header className="landing-header">
                    <div className="landing-logo">
                        <span className="logo-icon">📦</span>
                        <span className="logo-text font-display">{landingPageMeta.logoText}</span>
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
                    
                    {/* Language selector */}
                    <div className="translation-wrapper">
                        <button
                            className={`translation-dropdown ${isLangOpen ? 'active' : ''}`}
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            <span className={`fi fi-${currentLang.flag}`}></span>
                            <span className="translation-name">{currentLang.id}</span>
                        </button>

                        {isLangOpen && (
                            <div className="translation-menu">
                                {otherLanguages.map((lang) => (
                                    <button
                                        key={lang.id}
                                        className="translation-item"
                                        onClick={() => handleSelect(lang)}
                                    >
                                        <span className={`fi fi-${lang.flag}`}></span>
                                        <span className="translation-name">{lang.id}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                </header>

                {/* Hero */}
                <section className="hero-section">
                    <h1 className="hero-title font-display">
                        {landingPageMeta.heroTitleBegining} <br className="hero-br" />
                        <br />
                        <span className="hero-highlight">{landingPageMeta.heroTitleHighlight}</span>
                        <br />
                        {landingPageMeta.heroTitleEnding}
                    </h1>
                    <p className="hero-description">
                        {games.length} {landingPageMeta.heroDescription}
                    </p>
                    <button
                        onClick={() => {
                            document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hero-cta"
                    >
                        {landingPageMeta.heroCTA} ↓
                    </button>
                </section>

                {/* Stats bar */}
                <div className="stats-bar">
                    <div className="stats-inner">
                        {[
                            { value: games.length, label: landingPageMeta.statsGamesAvailable },
                            { value: '100+', label: landingPageMeta.statsCardsAvailable },
                            { value: '∞', label: landingPageMeta.statsFunGaranty },
                            { value: '0', label: landingPageMeta.statsOffline },
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
                        <h2 className="section-title font-display">{landingPageMeta.gamesTitle}</h2>
                        <p className="section-subtitle">{landingPageMeta.gamesSubtitle}</p>
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
                    <h2 className="section-title text-center font-display">{landingPageMeta.hiwTitle}</h2>
                    <div className="steps-grid">
                        {[
                            { step: '01', title: landingPageMeta.hiwPart1Title, desc: landingPageMeta.hiwPart1Description, color: '#FF3A5C' },
                            { step: '02', title: landingPageMeta.hiwPart2Title, desc: landingPageMeta.hiwPart2Description, color: '#B347FF' },
                            { step: '03', title: landingPageMeta.hiwPart3Title, desc: landingPageMeta.hiwPart3Description, color: '#00E88F' },
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