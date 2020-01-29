import React from 'react'

const PersonalInformation = ({
    ...props
}) => {
    return <div className="section personalinformations">
        <div style={{
            width: '100%',
            height: '100%',
        }}>

            <div style={{
                height : '25%',
                display : 'flex'
            }}>
                <h1 className="titleexperiences">
                    Personal Informations
                </h1> 
            </div>

            <div style={{
                height : '65%',
                display : 'flex'
            }}>
                <div style={{
                    width : '50%',
                    height : '100%'
                }}>
                    <ul style={{listStyle : 'none'}}>
                        <li style={{
                            display : 'flex',
                            alignItems : 'end',
                            fontSize : 40,
                            marginTop : 20,
                            color : 'white'
                        }}>
                            <i style={{
                                fontSize : 43,
                                color : 'white'
                            }} className="material-icons">cake</i>
                            Birth Date : 27/08/1995
                        </li>
                        <li style={{
                            display : 'flex',
                            alignItems : 'end',
                            fontSize : 40,
                            marginTop : 20,
                            color : 'white'
                        }}>
                            <i style={{
                                fontSize : 43,
                                color : 'white'
                            }} className="material-icons">person_pin_circle</i>
                            Birth Place : Ankara
                        </li>
                        <li style={{
                            display : 'flex',
                            alignItems : 'end',
                            fontSize : 40,
                            color : 'white',
                            marginTop : 20,
                            textAlign : 'start'
                        }}>
                            <i style={{
                                fontSize : 43,
                                color : 'white'
                            }} className="material-icons">drive_eta</i>
                            Driving Licences : A1, A2, A, B1, B
                        </li>
                        <li style={{
                            display : 'flex',
                            alignItems : 'end',
                            fontSize : 40,
                            color : 'white',
                            marginTop : 20,
                            textAlign : 'start'
                        }}>
                            <img style={{
                                height : 43,
                            }} src="medal.png"/>
                            Military Service : Not Served
                        </li>
                    </ul>
                </div>
                <div style={{
                    width : '50%',
                    height : '100%'
                }}>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{
                            display: 'flex',
                            alignItems: 'end',
                            fontSize: 40,
                            marginTop: 20,
                            color: 'white'
                        }}>
                            <i style={{
                                fontSize: 43,
                                color: 'white'
                            }} className="material-icons">school</i>
                            <div style={{display : 'grid', marginLeft : 5}}>
                                <span style={{
                                    fontSize : 40,
                                    textAlign : 'start'
                                }}>
                                    <b>Hacettepe University</b>
                                </span>
                                <span style={{
                                    fontSize : 25,
                                    textAlign : 'start'
                                }}>
                                    Faculty of Engineering, Computer Engineering
                                </span>
                                <span style={{
                                    marginTop : 10,
                                    fontSize : 25,
                                    textAlign : 'start'
                                }}>
                                    2013 - 2018
                                </span>
                                <span style={{
                                    marginTop : 10,
                                    fontSize : 15,
                                    textAlign : 'start'
                                }}>
                                    <i>GPA: 2.94 / 4</i>
                                </span>
                            </div>
                            
                        </li>
                        <li style={{
                            display: 'flex',
                            alignItems: 'end',
                            fontSize: 40,
                            marginTop: 20,
                            color: 'white'
                        }}>
                            <i style={{
                                fontSize: 43,
                                color: 'white'
                            }} className="material-icons">school</i>
                            <div style={{display : 'grid', marginLeft : 5}}>
                                <span style={{
                                    fontSize : 40,
                                    textAlign : 'start'
                                }}>
                                    <b>Dikmen Highschool</b>
                                </span>
                                <span style={{
                                    marginTop : 10,
                                    fontSize : 25,
                                    textAlign : 'start'
                                }}>
                                    2009 - 2013
                                </span>
                                <span style={{
                                    marginTop : 10,
                                    fontSize : 15,
                                    textAlign : 'start'
                                }}>
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