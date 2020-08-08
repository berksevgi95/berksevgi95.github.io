import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';

import './Whoami.css'

const Whoami = ({
    id
}) => {
    return (
        <article id={id} className="h-full overflow-auto view">
            <div>
                <h1 className="title">Who Am I?</h1>
                <div>
                    I am a software engineer who aims to develop effective and practical solutions, experienced on primarily web and mobile applications, also embedded systems, neural networks and continuous integration concepts, enjoys researching but enjoys more than coding, open-minded, enthusiastic for working, compatible with team work, motorcycle addict
                </div>
                <div className="continue">
                    <a href="#personal-information">Click to continue <ArrowRightOutlined /></a>
                </div>
            </div>
        </article>
    )
}

export default Whoami;