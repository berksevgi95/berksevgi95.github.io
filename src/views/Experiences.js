import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = ({
    ...props
}) => {

    return <div className="section experiences">

        <div style={{
            width : '100%',
            height : 300,
            display : 'flex'
        }}>
            <h1 className="titleexperiences">
                Experiences
            </h1>
        </div>

        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work left"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="January 2019 - present (for now)"
                iconStyle={{ 
                    background: 'rgb(33, 150, 243)', 
                    color: '#fff',
                    display : 'flex'
                }}
                icon={<i style={{fontSize : 35, margin : 'auto'}} className="material-icons">work</i>}
            >
                <div style={{
                    display : 'flex',
                    width : '100%',
                }}>
                    <div style={{
                        width : '20%'
                    }}>
                        <img style={{
                            width : '100%',
                        }} src="havelsan.png"></img>
                        
                    </div>
                    <div style={{
                        marginLeft : 15,
                        width : '70%'
                    }}>
                        <h4 style={{textAlign : 'start'}} className="vertical-timeline-element-title">
                            <b>Front-End Software Development</b>
                        </h4>
                        <h5 style={{textAlign : 'start'}} className="vertical-timeline-element-subtitle">
                            Havelsan Inc.
                        </h5>
                    </div>
                </div>
                
                <p style={{textAlign : 'start'}}>
                    I have been currently working in ASTAR product family to develop ASTARBI which is the 
                    ultimate business intelligence and desicion analysis solution, enabling users to visualize, 
                    analyze, report and compile their business data
                </p>

                <p style={{textAlign : 'start'}}>
                    <span style={{
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12
                    }}>
                        React.js
                    </span>
                    <span style={{
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12
                    }}>
                        Redux
                    </span>
                    <span style={{
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12
                    }}>
                        Docker
                    </span>
                    <span style={{
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12
                    }}>
                        Kubernetes
                    </span>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="August 2017 - December 2018"
                iconStyle={{ 
                    background: 'rgb(33, 150, 243)', 
                    color: '#fff',
                    display : 'flex'
                }}
                icon={<i style={{fontSize : 35, margin : 'auto'}} className="material-icons">work</i>}
            >
                <div style={{
                    display : 'flex',
                    width : '100%',
                }}>
                    <div style={{
                        width : '20%'
                    }}>
                        <img style={{
                            width : '100%',
                        }} src="fortearge.png"></img>
                        
                    </div>
                    <div style={{
                        marginLeft : 15,
                        width : '70%'
                    }}>
                        <h4 style={{textAlign : 'start'}} className="vertical-timeline-element-title">
                            <b>Full-Stack Software Development</b>
                        </h4>
                        <h5 style={{textAlign : 'start'}} className="vertical-timeline-element-subtitle">
                            ForteArGe Informatics, Engineering, Consultancy Inc.
                        </h5>
                    </div>
                </div>
                
                <p style={{textAlign : 'start'}}>
                    Worked as a full-stack developer on FiloSoft – a web-based fleet inventory maintenance 
                    management system, also joined FiloSoft mobile application development team
                </p>

                <p style={{textAlign : 'start'}}>
                    <span style={{
                        float : 'left',
                        marginRight : 5,
                        marginBottom : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        AngularJS
                    </span>
                    <span style={{
                        float : 'left',
                        marginRight : 5,
                        marginBottom : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Spring MVC
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Hibernate
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        MySQL
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Microsoft SQL Server
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Jenkins
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        React Native
                    </span>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work left"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="June 2017 - August 2017"
                iconStyle={{ 
                    background: 'rgb(33, 150, 243)', 
                    color: '#fff',
                    display : 'flex'
                }}
                icon={<i style={{fontSize : 35, margin : 'auto'}} className="material-icons">school</i>}
            >
                <div style={{
                    display : 'flex',
                    width : '100%',
                }}>
                    <div style={{
                        width : '20%'
                    }}>
                        <img style={{
                            width : '100%',
                        }} src="fortearge.png"></img>
                        
                    </div>
                    <div style={{
                        marginLeft : 15,
                        width : '70%'
                    }}>
                        <h4 style={{textAlign : 'start'}} className="vertical-timeline-element-title">
                            <b>Intern</b>
                        </h4>
                        <h5 style={{textAlign : 'start'}} className="vertical-timeline-element-subtitle">
                            ForteArGe Informatics, Engineering, Consultancy Inc.
                        </h5>
                    </div>
                </div>
                
                <p style={{textAlign : 'start'}}>
                    I did my 2016-2017 summer internship by testing both front and backend layer 
                    of FiloSoft with some behavior-driven and e2e test development frameworks
                </p>

                <p style={{textAlign : 'start'}}>
                    <span style={{
                        float : 'left',
                        marginRight : 5,
                        marginBottom : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        AngularJS
                    </span>
                    <span style={{
                        float : 'left',
                        marginRight : 5,
                        marginBottom : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        JUnit
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Jasmine
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Protractor
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Gulp.js
                    </span>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="June 2016 - July 2016"
                iconStyle={{ 
                    background: 'rgb(33, 150, 243)', 
                    color: '#fff',
                    display : 'flex'
                }}
                icon={<i style={{fontSize : 35, margin : 'auto'}} className="material-icons">school</i>}
            >
                <div style={{
                    display : 'flex',
                    width : '100%',
                }}>
                    <div style={{
                        width : '20%'
                    }}>
                        <img style={{
                            width : '100%',
                        }} src="inova.png"></img>
                        
                    </div>
                    <div style={{
                        marginLeft : 15,
                        width : '70%'
                    }}>
                        <h4 style={{textAlign : 'start'}} className="vertical-timeline-element-title">
                            <b>Intern</b>
                        </h4>
                        <h5 style={{textAlign : 'start'}} className="vertical-timeline-element-subtitle">
                            İnova Consultancy, Software, Education Inc.
                        </h5>
                    </div>
                </div>
                
                <p style={{textAlign : 'start'}}>
                    I did my 2015– 2016 summer internship by developed simple automation 
                    management module to be used in Türkiye Şişe ve Cam Fabrikaları A.Ş.
                </p>

                <p style={{textAlign : 'start'}}>
                    <span style={{
                        float : 'left',
                        marginRight : 5,
                        marginBottom : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        ASP.NET
                    </span>
                    <span style={{
                        float : 'left',
                        marginRight : 5,
                        marginBottom : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Entity Framework
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Microsoft SQL Server
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid white',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        DevExpress
                    </span>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
}

export default Experiences;