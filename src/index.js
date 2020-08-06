import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav/Nav';
import Section from './components/Section/Section';

import './styles.css'


const App = () => {
    return (
        <div className="w-full h-full flex">
            <Nav />
            <Section />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
