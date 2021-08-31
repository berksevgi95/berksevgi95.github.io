import React from 'react';
import routes from '../../config/routes';
import Introduction from '../../views/Introduction/Introduction';

const Section = () => {

    const mainRef = React.useRef()

    React.useEffect(() => {
        handleHashChange()
        window.addEventListener('hashchange', handleHashChange)
        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    const handleHashChange = () => {
        if (routes && routes.length > 0 && window.location.hash) {
            mainRef.current.scrollTop = routes.find(
                route => '#' + route.path === window.location.hash
            ).index * window.innerHeight
        }
    }

    return (
        <article 
            style={{
                flex: 1
            }}
            ref={mainRef}>
            {/* <div
                style={{
                    height: '100vh'
                }}
            /> */}
            <Introduction />
            {routes && routes.length > 0 && routes.map(route => (
                <route.component
                    key={route.index}
                    id={route.path}
                />
            ))}
        </article>
    )
}

export default Section;