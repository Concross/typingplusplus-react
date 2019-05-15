import React from 'react';
import './index.scss';
import HighscoreCell from '../HighscoreCell';

const HighscoreRow = ({ record }) => {
    return (
        <tr className="highscore-row">
            <HighscoreCell data={record.name} />
            <HighscoreCell data={record.score} />
        </tr>
    );
};

export default HighscoreRow;
