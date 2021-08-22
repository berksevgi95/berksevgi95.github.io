import React from 'react';

import {
    MenuOutlined,
    CloseOutlined
} from '@ant-design/icons';
import routes from '../../config/routes';

import './Nav.css'

const Nav = () => {

    return (
        <nav className="nav">
            <ul className="nav-list">
                {routes && routes.length > 0 && routes.map(route => (
                    <li
                        key={route.index}
                        className="nav-list-item"
                    >
                        <a
                            href={`#${route.path}`}
                            className="nav-list-item-link"
                        >
                            {route.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;