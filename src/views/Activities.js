import React from 'react'

const Activities = ({
    ...props
}) => {

    return <div className="section activities">

        <div style={{
            width: '100%',
            height: 250,
            display: 'flex',
            position : 'absolute'
        }}>
            <h1 style={{marginLeft : 50}} className="titleexperiences">
                Activities
            </h1>
        </div>

        <div className="section">
            <div className="slide">
                <h3>Slide 2.1</h3>
            </div>
            <div className="slide">
                <h3>Slide 2.2</h3>
            </div>
            <div className="slide">
                <h3>Slide 2.3</h3>
            </div>
        </div>


    </div>

}

export default Activities;