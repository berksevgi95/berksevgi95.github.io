import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';

import './Introduction.css'

const Introduction = ({
    id
}) => {

    return (
        <article id={id} className="h-full overflow-auto introduction">
            <div>
                <h1 className="title">
                    <b>Berk Sevgi</b>
                </h1>
                <h3 className="subtitle">
                    <b>Software Engineer</b>
                </h3>
                <div className="continue">
                    <a href="#whoami">Discover Me <ArrowRightOutlined /></a>
                </div>
            </div>

        </article>
    )
}

export default Introduction;