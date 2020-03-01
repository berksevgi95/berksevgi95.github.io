import React from 'react'
import { FormattedMessage } from 'react-intl'

const PersonalInformation = ({
    ...props
}) => {
    return <div className="section personalinformations">
        <div className="w-full h-full">

            <div className="h-56 flex">
                <h1 className="text-4xl md:text-6xl text-white m-auto">
                    <b><FormattedMessage id="personal.information"/></b>
                </h1> 
            </div>

            <div className="container p-16 pt-0 m-auto">
                <div className="w-full md:w-1/2 h-full">
                    <ul className="list-none">
                        <li className="flex my-8">
                            <i className="material-icons text-white text-4xl mr-4">cake</i>
                            <span className="text-white text-2xl"><FormattedMessage id="birth.date" values={{value : '27/08/1995'}} /></span>
                        </li>
                        <li className="flex my-8">
                            <i className="material-icons text-white text-4xl mr-4">person_pin_circle</i>
                            <span className="text-white text-2xl"><FormattedMessage id="birth.place" values={{value : 'Ankara'}} /></span>
                        </li>
                        <li className="flex my-8">
                            <i className="material-icons text-white text-4xl mr-4">drive_eta</i>
                            <span className="text-white text-2xl"><FormattedMessage id="driving.licences" values={{value : 'A1, A2, A, B1, B'}} /></span>
                        </li>
                        <li className="flex my-8">
                            <img alt="medal" className="mr-4" style={{height : 36}} src="medal.png"/>
                            <span className="text-white text-2xl"><FormattedMessage id="military.service" values={{value : <FormattedMessage id="not.served"/>}} /></span>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 h-full">
                    <ul className="list-none">
                        <li className="flex my-8">
                            <i className="material-icons text-white text-4xl mr-4">school</i>
                            <div className="grid">
                                <h5 className="text-left text-2xl m-0 text-white ">
                                    <b><FormattedMessage id="hacettepe.university"/></b>
                                </h5>
                                <span className="text-left text-2xl m-0 text-white ">
                                    <FormattedMessage id="faculty.graduate"/>
                                </span>
                                <span className="text-left text-md m-0 text-white mt-2">
                                    2013 - 2018
                                </span>
                                <span className="text-left text-md m-0 text-white mt-2">
                                    <i><FormattedMessage id="gpa" values={{value: '2.94 / 4'}}/></i>
                                </span>
                            </div>
                            
                        </li>
                        <li className="flex my-8">
                            <i className="material-icons text-white text-4xl mr-4">school</i>
                            <div className="grid">
                                <h5 className="text-left text-2xl m-0 text-white ">
                                    <b><FormattedMessage id="dikmen.highschool"/></b>
                                </h5>
                                <span className="text-left text-md m-0 text-white mt-2">
                                    2009 - 2013
                                </span>
                                <span className="text-left text-md m-0 text-white mt-2">
                                    <i>80.05 / 100</i>
                                </span>
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div className="arrow">
            <span></span>
            <FormattedMessage id="scroll.to.continue"/>
        </div>
    </div>
}

export default PersonalInformation