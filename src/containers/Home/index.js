import React from 'react';
import logo from '../../assets/logo_home.png';
import EntryForm from '../../components/EntryForm';
import './index.scss';

const Home = () => {
    return (
        <div className="home-page">
            <img src={logo} alt="home page logo" />
            <EntryForm />
        </div>
    );
};

export default Home;
