import React from 'react';

import {
    MenuOutlined,
    CloseOutlined
} from '@ant-design/icons';
import routes from '../../config/routes';

import './Nav.css'

const Nav = () => {

    const titleRef = React.useRef();
    const containerRef = React.useRef();
    const subtitlesRef = React.useRef();

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    const onScroll = (e) => {
        if (window.pageYOffset > window.innerHeight / 2) {
            titleRef.current.style.top = '0%'
            titleRef.current.style.fontSize = '25px'
            titleRef.current.style.padding = '25px'
            containerRef.current.style.opacity = '1'
            subtitlesRef.current.style.opacity = '0'
        } else {
            titleRef.current.style.top = 'calc(50% - ' + window.pageYOffset + 'px)';
            titleRef.current.style.fontSize = 100 - ((75 / (window.innerHeight / 2)) * window.pageYOffset) + 'px'
            titleRef.current.style.padding = 100 - ((75 / (window.innerHeight / 2)) * window.pageYOffset) + 'px'
            containerRef.current.style.opacity = ((1 / (window.innerHeight / 2)) * window.pageYOffset)
            subtitlesRef.current.style.opacity = 1 - ((1 / (window.innerHeight / 2)) * window.pageYOffset)
        }
    }

    return (
        <nav className="nav">
            <h1 
                style={{
                    top: 'calc(50% - 0px)',
                    fontSize: '100px',
                    padding: 100,
                    paddingBottom: 0
                }} 
                ref={titleRef} 
                className="nav-title"
            >
                Berk Sevgi
                <ul 
                    ref={subtitlesRef}
                    className="nav-subtitles"
                >
                    <li>
                        Software Engineer
                    </li>
                </ul>
            </h1>
            <ul 
                ref={containerRef}
                className="nav-container"
                style={{
                    opacity: 0
                }}
            >
                {routes && routes.length > 0 && routes.map(route => (
                    <li key={route.index}>
                        <a
                            className="nav-link"
                            href={`#${route.path}`}
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