import React from 'react';
import routes from '../../config/routes';

const Section = () => {

    const ref = React.useRef()

    React.useEffect(() => {
        if (routes && routes.length > 0) {
            ref.current.scrollTop = routes.find(
                route => '#' + route.path === window.location.hash
            ).index * window.innerHeight
        }
    }, [])

    return (
        <main ref={ref} className="w-full overflow-auto">
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