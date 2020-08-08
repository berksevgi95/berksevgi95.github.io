import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';

import './Projects.css'

const Projects = ({
    id
}) => {
    return (
        <article id={id} className="h-full overflow-auto view">
            <div>
                <h1 className="title">Projects</h1>

                <div className="continue">
                    <a href="#activities">Click to continue <ArrowRightOutlined /></a>
                </div>
            </div>
        </article>
    )
}

export default Projects;