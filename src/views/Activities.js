import React from 'react'

const Activities = ({
    ...props
}) => {

    return <div className="section activities">

        <div className="h-0-25 flex absolute w-full h-56">
                <h1 className="text-4xl md:text-6xl text-white m-auto">
                    <b>Activities</b>
                </h1> 
            </div>
        <div className="slide">
            <div className="w-full flex">
                <div className="w-4/5 h-full m-auto flex flex-col p-8">
                    <span className="text-xl md:text-3xl text-left text-white" >
                        <b>Participated Activities</b>
                    </span>
                    <div className="w-full h-full">
                        <div className="w-full flex mt-4" >
                            <i className="material-icons text-white mr-2">calendar_today</i>
                            <div className="w-full">
                                <span className="w-full text-sm md:text-xl float-left text-white text-left" >
                                    <b>NATO ACT 2019 TIDE Hackathon</b> <i>Warsaw, Poland</i>
                                </span>
                                <span className="text-md float-left text-white text-left" >
                                    February 2019 - March 2019
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>



        <div className="slide">
            <div className="w-full flex">
                <div className="w-4/5 h-full m-auto flex flex-col p-8">
                    <span className="text-xl md:text-3xl text-left text-white" >
                        <b>Participated Courses</b>
                    </span>
                    <div className="w-full h-full">
                        <div className="w-full flex mt-4" >
                            <i className="material-icons text-white mr-2">calendar_today</i>
                            <div className="w-full">
                                <span className="w-full text-sm md:text-xl float-left text-white text-left" >
                                    <b>Configuration Management According to MIL-STD-973 form CM01</b> <i>Ankara, Turkey</i>
                                </span>
                                <span className="text-md float-left text-white text-left" >
                                    July 2018 - August 2018
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="slide">
            <div className="w-full flex">
                <div className="w-4/5 h-full m-auto flex flex-col p-8">
                    <span className="text-xl md:text-3xl text-left text-white" >
                        <b>Languages</b>
                    </span>
                    <div className="w-full h-full">
                        <div className="w-full flex mt-4" >
                            <i className="material-icons text-white mr-2">language</i>
                            <div className="w-full">
                                <span className="w-full text-xl float-left text-white text-left" >
                                    <b>English</b> 
                                </span>
                                <span className="text-md float-left text-white text-left" >
                                    Advance
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex mt-4" >
                            <i className="material-icons text-white mr-2">language</i>
                            <div className="w-full">
                                <span className="w-full text-xl float-left text-white text-left" >
                                    <b>Russian</b>
                                </span>
                                <span className="text-md float-left text-white text-left" >
                                    Beginner
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div className="arrow">
            <span></span>
            Scroll to Continue
        </div>

    </div>

}

export default Activities;