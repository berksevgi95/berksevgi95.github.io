import React from 'react'

const PersonalInformation = ({
    ...props
}) => {
    return <div className="section personalinformations">
        <div className="w-full h-full">

            <div className="h-0-25 flex">
                <h1 className="h1 white m-auto">
                    Personal Informations
                </h1> 
            </div>

            <div className="flex" style={{
                height : '65%',
            }}>
                <div className="w-0-5 h-full">
                    <ul className="list-style-none">
                        <li className="flex mt-20">
                            <i className="material-icons white font-size-40 mr-10">cake</i>
                            <span className="font-size-30 white">Birth Date : 27/08/1995</span>
                        </li>
                        <li className="flex mt-20">
                            <i className="material-icons white font-size-40 mr-10">person_pin_circle</i>
                            <span className="font-size-30 white">Birth Place : Ankara</span>
                        </li>
                        <li className="flex mt-20">
                            <i className="material-icons white font-size-40 mr-10">drive_eta</i>
                            <span className="font-size-30 white">Driving Licences : A1, A2, A, B1, B</span>
                        </li>
                        <li className="flex mt-20">
                            <img className="mr-10" style={{height : 40}} src="medal.png"/>
                            <span className="font-size-30 white">Military Service : Not Served</span>
                        </li>
                    </ul>
                </div>
                <div className="w-0-5 h-full">
                    <ul className="list-style-none">
                        <li className="flex mt-15">
                            <i className="material-icons font-size-40 white">school</i>
                            <div className="grid ml-15">
                                <h5 className="m-0 h5 text-align-start white ">
                                    Hacettepe University
                                </h5>
                                <span className="font-size-20 m-0 mt-5 white">
                                    Faculty of Engineering, Computer Engineering
                                </span>
                                <span className="font-size-20 m-0 mt-5 white text-align-start">
                                    2013 - 2018
                                </span>
                                <span className="mt-10 font-size-15 white text-align-start">
                                    <i>GPA: 2.94 / 4</i>
                                </span>
                            </div>
                            
                        </li>
                        <li className="flex mt-15">
                            <i className="material-icons font-size-40 white">school</i>
                            <div className="grid ml-15">
                                <h5 className="m-0 h5 text-align-start white">
                                    Dikmen Highschool
                                </h5>
                                <span className="font-size-20 m-0 mt-5 white text-align-start">
                                    2009 - 2013
                                </span>
                                <span className="mt-10 font-size-15 white text-align-start">
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
            Scroll to Continue
        </div>
    </div>
}

export default PersonalInformation