import React from 'react';
import './BackgroundShapes.css';

export const BackgroundShapes: React.FC = () => {
    return (
        <div className="bg-shapes-container" aria-hidden="true">
            <div className="shape-circle-yellow" />
            <div className="shape-square-red" />
            <div className="shape-bar-purple" />
            <div className="shape-circle-green" />
            <div className="shape-square-cyan" />
            <div className="shape-square-yellow-small" />
            <div className="shape-circle-center" />
        </div>
    );
};