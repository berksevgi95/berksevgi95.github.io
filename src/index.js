import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav/Nav';
import Section from './components/Section/Section';

import './styles.css'


const App = () => {
    // return (
    //     <React.Fragment>
    //         <Section />
    //         <Nav />
    //     </React.Fragment>
    // )

    return (
        <React.Fragment>
            {/* <article
                style={{
                    flex: 1
                }}
            >
                <section>
                    adasd
                </section>
                <section>
                    adasd
                </section>
                <section>
                    adasd
                </section>
            </article> */}
            <Section></Section>
            <Nav />
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
