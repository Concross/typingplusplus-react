import React from 'react';
import './index.scss';
import HighscoreRow from '../HighscoreRow';

const HighscoreTable = ({ records }) => {
    const rows = records.map((record, idx) => {
        return (
            <HighscoreRow
                record={record}
                key={`${record.name + record.score}-${idx}`}
            />
        );
    });

    return (
        <div className="highscore-table">
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>High Score</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};

export default HighscoreTable;
