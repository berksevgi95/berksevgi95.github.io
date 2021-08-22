import React from 'react';
import routes from '../../config/routes';

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
        <main ref={mainRef}>
            {/* <div
                style={{
                    height: '100vh'
                }}
            /> */}
            {routes && routes.length > 0 && routes.map(route => (
                <route.component
                    key={route.index}
                    id={route.path}
                />
            ))}
        </main>
    )
}

export default Section;