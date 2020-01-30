import React from 'react'

const Activities = ({
    ...props
}) => {

    return <div className="section activities">

        <div style={{
            width: '100%',
            height: 200,
            display: 'flex',
            position : 'absolute'
        }}>
            <h1 className="titleexperiences">
                Activities
            </h1>
        </div>

        <div className="slide">
            <div style={{width : '100%', height : 'calc(100% - 350px)', display : 'flex'}}>
                <div style={{
                    width : '80%', 
                    height : '100%', 
                    margin : 'auto', 
                    display : 'flex', 
                    flexDirection : 'column'
                }}>
                    <span style={{fontSize : 35, fontWeight : 'bolder', textAlign : 'start', color : 'white'}}>
                        Participated Activities
                    </span>
                    <div style={{width :'100%', height : '100%'}}>
                        <div style={{width : '100%', display : 'flex', marginTop: 20}}>
                            <i style={{marginRight : 10, color : 'white'}} className="material-icons">calendar_today</i>
                            <div style={{width : '100%'}}>
                                <span style={{
                                    width : '100%',
                                    float: 'left',
                                    color: 'white',
                                    textAlign: 'start',
                                    fontSize: 20
                                }}>
                                    <b>NATO ACT 2019 TIDE Hackathon</b> <i>Warsaw, Poland</i>
                                </span>
                                <span style={{
                                    float: 'left',
                                    marginTop: 20,
                                    color: 'white',
                                    textAlign: 'start',
                                    fontSize: 15
                                }}>
                                    February 2019 - March 2019
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>



        <div className="slide">
            <div style={{ width: '100%', height: 'calc(100% - 350px)', display: 'flex' }}>
                <div style={{
                    width: '80%',
                    height: '100%',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <span style={{ fontSize: 35, fontWeight: 'bolder', textAlign: 'start', color: 'white' }}>
                        Participated Courses
                    </span>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div style={{ width: '100%', display: 'flex', marginTop: 20 }}>
                            <i style={{ marginRight: 10, color: 'white' }} className="material-icons">school</i>
                            <div style={{ width: '100%' }}>
                                <span style={{
                                    width: '100%',
                                    float: 'left',
                                    color: 'white',
                                    textAlign: 'start',
                                    fontSize: 20
                                }}>
                                    <b>Configuration Management According to MIL-STD-973 form CM01</b> <i>Ankara, Turkey</i>
                                </span>
                                <span style={{
                                    float: 'left',
                                    marginTop: 20,
                                    color: 'white',
                                    textAlign: 'start',
                                    fontSize: 15
                                }}>
                                    February 2019 - March 2019
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>



        <div className="slide">
            <div style={{ width: '100%', height: 'calc(100% - 350px)', display: 'flex' }}>
                <div style={{
                    width: '80%',
                    height: '100%',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <span style={{ fontSize: 35, fontWeight: 'bolder', textAlign: 'start', color: 'white' }}>
                        Languages
                    </span>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div style={{ width: '100%', display: 'flex', marginTop: 20 }}>
                            <i style={{ marginRight: 10, color: 'white' }} className="material-icons">language</i>
                            <div style={{ width: '100%' }}>
                                <span style={{
                                    width: '100%',
                                    float: 'left',
                                    color: 'white',
                                    textAlign: 'start',
                                    fontSize: 20
                                }}>
                                    <b>English</b> <i>Advance</i>
                                </span>
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', marginTop: 20 }}>
                            <i style={{ marginRight: 10, color: 'white' }} className="material-icons">language</i>
                            <div style={{ width: '100%' }}>
                                <span style={{
                                    width: '100%',
                                    float: 'left',
                                    color: 'white',
                                    textAlign: 'start',
                                    fontSize: 20
                                }}>
                                    <b>Russian</b> <i>Beginner</i>
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