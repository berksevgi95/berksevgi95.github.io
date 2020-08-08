import React from 'react';

import './Nav.css'
import routes from '../../config/routes';

const Nav = () => {

    const [currHash, setCurrHash] = React.useState(window.location.hash)

    const handleHashChange = () => {
        setCurrHash(window.location.hash)
    }

    React.useState(() => {
        window.addEventListener('hashchange', handleHashChange, true)

        return () => {
            window.removeEventListener('hashchange', handleHashChange, true)
        }
    })

    return (
        <nav className="nav w-1/3 items-center flex justify-end">
            <ul className="nav-list">
                {routes && routes.length > 0 && routes.map(route => {
                    const isActive = currHash === ('#' + route.path) ||
                        (currHash === '' && route.path === 'introduction')
                    return (
                        <li key={route.index}>
                            <a
                                className={`${isActive ? 'active' : ''}`}
                                href={`#${route.path}`}
                            >
                                {route.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;