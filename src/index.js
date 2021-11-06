import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav/Nav';
import Section from './components/Section/Section';

import './styles.css'


const App = () => (
    <React.Fragment>
        <Section></Section>
        <Nav />
    </React.Fragment>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
