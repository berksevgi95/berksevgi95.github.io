import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav/Nav';
import Section from './components/Section/Section';

import './styles.css'


const App = () => {
    return (
        <React.Fragment>
            <Nav />
            <Section />

            {/* <div style={{
                height: '100vh'
            }} />

            <div style={{
                height: '100vh'
            }}>
                asdkasd
            </div>

            <div style={{
                height: '100vh'
            }}>
                asdkasd
            </div>

            <div style={{
                height: '100vh'
            }}>
                asdkasd
            </div> */}
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
