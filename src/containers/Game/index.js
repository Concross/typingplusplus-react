import React, { useState, useEffect } from 'react';
import './index.scss';
import GamePrompt from '../../components/GamePrompt';
import levels from '../../assets/levels';
import SetLevel from '../../components/LevelUp';

import { getPrompt } from '../../lib';

const Game = () => {
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [prompt, setPrompt] = useState('');

    // randomizePrompt
    const randomizePrompt = level => {
        setPrompt(getPrompt(levels[level]));
    };

    useEffect(() => {
        randomizePrompt(level);
    }, []);
    // updateScore
    // handleInput
    return (
        <div className="game-page">
            {/* Game Prompt */}
            {/* Handle level changes */}
            <SetLevel setLevel={setLevel} score={score} />
            <GamePrompt prompt={prompt.prompt} />
            {/* Scoreboard */}
            {/* Timer */}
        </div>
    );
};

export default Game;
