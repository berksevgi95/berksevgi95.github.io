import React from 'react'

const Introduction = ({
    ...props
}) => {
    return <div className="section introduction">
        <div style={{width : '100%', height : '100%', display : 'flex'}}>
            <div style={{margin : 'auto'}}>
                <div style={{display : 'flex'}}>
                    <div className="profile-picture centered titleanimation">
                        <img src="berk.jpg" alt="Berk Sevgi"/>
                    </div>
                </div>
                
                <h1 className="name">
                    <b>Berk Sevgi</b>
                </h1>

                <div className="abstract">
                    <span className="t-0">
                        Software Engineer
                    </span>
                    <span className="t-1">
                        Front-End Programmer
                    </span>
                    <span className="t-2">
                        JS Lover
                    </span>
                </div>
                
                <div className="arrow">
                    <span></span>
                    Scroll to Continue
                </div>
                
            </div>
            
        </div>
        
    </div>
}

export default Introduction