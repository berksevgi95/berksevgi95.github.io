import React from 'react'

const Introduction = ({
    ...props
}) => {
    return <div className="section introduction">
        <div className="w-full h-full flex">
            <div className="m-auto">
                <div className="flex">
                    <div className="profile-picture fade-in fade-in-delay-0-75">
                        <img className="centered" src="berk.jpg" alt="Berk Sevgi"/>
                    </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl text-white fade-in fade-in-delay-1-5 my-4">
                    <b>Berk Sevgi</b>
                </h1>

                <div className="titles">
                    <span className="text-xl md:text-3xl text-white fade-in fade-in-delay-2 mx-8">
                        Software Engineer
                    </span>
                    <span className="text-xl md:text-3xl text-white fade-in fade-in-delay-2-5 mx-8">
                        Front-End Programmer
                    </span>
                    <span className="text-xl md:text-3xl text-white fade-in fade-in-delay-3 mx-8">
                        JS Lover
                    </span>
                </div>
                
                
                <div className="arrow fade-in fade-in-delay-3-5">
                    <span></span>
                    Scroll to Continue
                </div>
                
            </div>
            
        </div>
        
    </div>
}

export default Introduction