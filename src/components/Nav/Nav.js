import React from 'react';

import './Nav.css'
import routes from '../../config/routes';

const Nav = ({
    onNavigate
}) => {

    return (
        <nav className="nav w-1/3 items-center flex justify-end">
            <ul className="nav-list">
                {routes && routes.length > 0 && routes.map(route => (
                    <li key={route.index}>
                        <a href={`#${route.path}`}>{route.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;