import React from 'react'

const TechnicalSkills = ({
    ...props
}) => {

    return <div className="section technicalskills">

        <div style={{
            width: '100%',
            height: 300,
            display: 'flex'
        }}>
            <h1 className="titleexperiences">
                Technical Skills
            </h1>
        </div>

        <div style={{
            width : '100%',
            display : 'flex',
            alignItems : 'center'
        }}>
            <i className="material-icons">check</i>
            <span>
                Web-based software development and relational database management on Java and ASP.NET
            </span>
        </div>


    </div>

}

export default TechnicalSkills;