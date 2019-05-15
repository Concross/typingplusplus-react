import React from 'react';
import './index.scss';

const GamePrompt = ({ prompt }) => {
    return (
        <section className="prompt-box">
            <pre>{prompt}</pre>
        </section>
    );
};

export default GamePrompt;
