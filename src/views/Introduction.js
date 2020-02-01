import React from 'react'

const Introduction = ({
    ...props
}) => {
    return <div className="section introduction">
        <div className="w-full h-full flex">
            <div className="m-auto">
                <div className="flex">
                    <div className="profile-picture centered fade-in fade-in-delay-0-75">
                        <img src="berk.jpg" alt="Berk Sevgi"/>
                    </div>
                </div>
                
                <h1 className="h1 white fade-in fade-in-delay-1-5">
                    <b>Berk Sevgi</b>
                </h1>

                <span className="h5 white fade-in fade-in-delay-2 ml-10 mr-10">
                    Software Engineer
                </span>
                <span className="h5 white fade-in fade-in-delay-2-5 ml-10 mr-10">
                    Front-End Programmer
                </span>
                <span className="h5 white fade-in fade-in-delay-3 ml-10 mr-10">
                    JS Lover
                </span>
                
                <div className="arrow fade-in fade-in-delay-3-5">
                    <span></span>
                    Scroll to Continue
                </div>
                
            </div>
            
        </div>
        
    </div>
}

export default Introduction