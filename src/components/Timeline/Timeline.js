import React from 'react';

import Event from './Event/Event'

import './Timeline.css'

const Timeline = ({
    className,
    children
}) => {
    return (
        <ul className={`timeline ${className}`}>
            {children}
        </ul>
    )
}

export {
    Event
}

export default Timeline