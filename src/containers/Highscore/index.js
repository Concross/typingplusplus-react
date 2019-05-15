import React from 'react';
import './index.scss';
import HighscoreTable from '../../components/HighscoreTable';

const records = [
    { name: 'Zach', score: 999 },
    { name: 'Isla', score: 998 },
    { name: 'Jameson', score: 997 },
    { name: 'Evelyn', score: 996 },
    { name: 'Gabe', score: 995 },
    { name: 'Brooklyn', score: 994 },
    { name: 'Finley', score: 993 },
    { name: 'McKenzie', score: 992 },
    { name: 'Declan', score: 991 },
    { name: 'Jasper', score: 990 }
];

const Highscore = () => {
    return <HighscoreTable records={records} />;
};

export default Highscore;
