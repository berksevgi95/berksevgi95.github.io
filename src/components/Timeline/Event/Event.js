import React from 'react';

import './Event.css'

const Event = ({
    title,
    subtitle,
    dateInterval,
    children
}) => {
    return (
        <li className="event">
            <div className="event-list-item-icon" />
            <div className="event-list-item">
                <div className="w-full font-bold">{title}</div>
                <div className="w-full">{subtitle}</div>
                <div className="w-full mt-1 text-xs"><i>{dateInterval}</i></div>
                <div className="w-full mt-2">{children}</div>
            </div>
        </li>
    )
}

export default Event;