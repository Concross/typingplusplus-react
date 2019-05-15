import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.scss';

const EntryForm = ({ history }) => {
    const [playerName, setPlayerName] = useState('');

    const handleSubmit = () => {
        window.localStorage.setItem('player', playerName);
        history.push('/play');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="playerName"
                    placeholder="Player Name"
                    value={playerName}
                    onChange={({ target }) => setPlayerName(target.value)}
                    required
                />
                <div className="entry-form-buttons">
                    <button type="submit" className="btn-primary">
                        Play
                    </button>
                    <Link to="/highscores">
                        <button type="button" className="btn-primary">
                            High Scores
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default withRouter(EntryForm);
