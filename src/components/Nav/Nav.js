import React from 'react';

import routes from '../../config/routes';

import './Nav.css'

const Nav = () => {

    const [open, setOpen] = React.useState(false);
    const [mini, setMini] = React.useState(false);

    React.useEffect(() => {
        if (window.innerWidth > 599) {
            setMini(false)
        } else {
            setMini(true)
        }

        window.addEventListener('resize', handeOnResize)
        
        return () => {
            window.removeEventListener('resize', handeOnResize)
        }
    }, [])

    const handeOnResize = (e) => {
        if (e.target.innerWidth > 599) {
            setMini(false)
        } else {
            setMini(true);
        }
    }

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <React.Fragment>
            {mini && !open && (
                <button 
                    className="toggle" 
                    onClick={handleToggle}
                >
                    <div />
                    <div />
                    <div />
                </button>
            )}
            <nav 
                className={`nav ${!mini ? '' : open ? 'nav-open' : 'nav-close'}`}
                style={open ? {
                    transition: '.3s'
                } : null}    
            >
                <ul className="nav-list">
                    {routes && routes.length > 0 && routes.map(route => (
                        <li
                            key={route.index}
                            className="nav-list-item"
                        >
                            <a
                                href={`#${route.path}`}
                                className="nav-list-item-link"
                                onClick={handleToggle}
                            >
                                {route.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {open && (
                <div 
                    className="overlay" 
                    onClick={handleToggle}
                />
            )}
        </React.Fragment>
    )
}

export default Nav;