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
                <div className="w-full">{title}</div>
                <div className="w-full bright">{subtitle}</div>
                <div className="w-full brighter">{dateInterval}</div>
                <div className="w-full children">{children}</div>
            </div>
        </li>
    )
}

export default Event;