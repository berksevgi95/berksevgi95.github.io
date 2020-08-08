import React from 'react';

import Event from './Event/Event'

const Timeline = ({
    children
}) => {
    return (
        <ul className="relative p-0">
            {children}
        </ul>
    )
}

export {
    Event
}

export default Timeline