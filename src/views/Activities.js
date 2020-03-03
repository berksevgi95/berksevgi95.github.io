import React from 'react'
import { FormattedMessage } from 'react-intl'

const Activities = ({
    ...props
}) => {

    return <div className="section activities">

        <div className="h-0-25 flex absolute w-full h-56">
                <h1 className="text-4xl md:text-6xl text-white m-auto">
                    <b><FormattedMessage id="activities"/></b>
                </h1> 
            </div>
        <div className="slide">
            <div className="w-full flex">
                <div className="w-4/5 h-full m-auto flex flex-col p-8">
                    <span className="text-xl md:text-3xl text-left text-white" >
                        <b><FormattedMessage id="participated.activities"/></b>
                    </span>
                    <div className="w-full h-full">
                        <div className="w-full flex mt-4" >
                            <i className="material-icons text-white mr-2">calendar_today</i>
                            <div className="w-full">
                                <span className="w-full text-sm md:text-xl float-left text-white text-left" >
                                    <b>NATO ACT 2019 TIDE Hackathon</b> <i><FormattedMessage id="warsaw.poland"/></i>
                                </span>
                                <span className="text-md float-left text-white text-left" >
                                    <FormattedMessage id="february"/> 2019 - <FormattedMessage id="march"/> 2019
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
                        <b><FormattedMessage id="participated.courses"/></b>
                    </span>
                    <div className="w-full h-full">
                        <div className="w-full flex mt-4" >
                            <i className="material-icons text-white mr-2">calendar_today</i>
                            <div className="w-full">
                                <span className="w-full text-sm md:text-xl float-left text-white text-left" >
                                    <b><FormattedMessage id="mil.std" /></b> <i><FormattedMessage id="ankara.turkey"/></i>
                                </span>
                                <span className="text-md float-left text-white text-left" >
                                    <FormattedMessage id="july"/> 2018 - <FormattedMessage id="august"/> 2018
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
                        <b><FormattedMessage id="languages"/></b>
                    </span>
                    <div className="w-full h-full">
                        <div className="w-full flex mt-4" >
                            <i className="material-icons text-white mr-2">language</i>
                            <div className="w-full">
                                <span className="w-full text-xl float-left text-white text-left" >
                                    <b><FormattedMessage id="english"/></b> 
                                </span>
                                <span className="text-md float-left text-white text-left" >
                                    <FormattedMessage id="advance"/>
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex mt-4" >
                            <i className="material-icons text-white mr-2">language</i>
                            <div className="w-full">
                                <span className="w-full text-xl float-left text-white text-left" >
                                    <b><FormattedMessage id="russian"/></b>
                                </span>
                                <span className="text-md float-left text-white text-left" >
                                    <FormattedMessage id="beginner"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div className="arrow">
            <span></span>
            <FormattedMessage id="scroll.to.continue"/>
        </div>

    </div>

}

export default Activities;