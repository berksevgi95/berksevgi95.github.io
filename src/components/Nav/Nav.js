import React from 'react';

import {
    MenuOutlined,
    CloseOutlined
} from '@ant-design/icons';
import routes from '../../config/routes';

import './Nav.css'

const Nav = () => {

    const [collapse, setCollapse] = React.useState(false)
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

    const toggleNavbar = () => {
        setCollapse(!collapse)
    }

    return (
        <React.Fragment>
            <nav className="nav w-1/3 items-center hidden md:flex justify-end">
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
            <header className="flex md:hidden header">
                <MenuOutlined
                    onClick={toggleNavbar}
                    className="text-2xl"
                    style={{ color: '#193f98' }}
                />
            </header>
            <nav
                style={{ width: collapse ? '100%' : '0%' }}
                className="nav collapsed flex md:hidden"
                onClick={toggleNavbar}
            >
                <div className="flex md:hidden header">
                    <CloseOutlined
                        className="text-2xl"
                        style={{ color: 'white' }}
                    />
                </div>
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
        </React.Fragment>

    )
}

export default Nav;