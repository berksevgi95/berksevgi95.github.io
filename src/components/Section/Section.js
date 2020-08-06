import React from 'react';
import routes from '../../config/routes';

const Section = React.forwardRef(({ }, ref) => {
    return (
        <main className="w-full overflow-auto">
            {routes && routes.length > 0 && routes.map(route => (
                <route.component
                    key={route.index}
                    id={route.path}
                />
            ))}
        </main>
    )
})

export default Section;