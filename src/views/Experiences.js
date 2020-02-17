import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = ({
    ...props
}) => {

    return <div className="section experiences">
        <div className="flex h-56">
            <h1 className="text-6xl text-white m-auto">
                <b>Experiences</b>
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
                icon={<i className="material-icons font-size-30 m-auto">work</i>}
            >
                <div className="flex w-full">
                    <div className="w-1/5">
                        <img className="w-full" src="havelsan.png"></img>
                    </div>
                    <div className="ml-8">
                        <h4 className="vertical-timeline-element-title text-left">
                            <b>Front-End Software Development</b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-left">
                            Havelsan Inc.
                        </h5>
                    </div>
                </div>
                
                <p className="text-left">
                    I have been currently working in ASTAR product family to develop ASTARBI which is the 
                    ultimate business intelligence and desicion analysis solution, enabling users to visualize, 
                    analyze, report and compile their business data
                </p>

                <p className="text-left">
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
                        React.js
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
                        Redux
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
                        Docker
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
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
                icon={<i className="material-icons font-size-30 m-auto">work</i>}
            >
                <div className="flex w-full">
                    <div className="w-1/5">
                        <img className="w-full" src="fortearge.png"></img>
                    </div>
                    <div className="ml-8">
                        <h4 className="vertical-timeline-element-title text-left">
                            <b>Full-Stack Software Development</b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-left">
                            ForteArGe Informatics, Engineering, Consultancy Inc.
                        </h5>
                    </div>
                </div>
                
                <p className="text-left">
                    Worked as a full-stack developer on FiloSoft – a web-based fleet inventory maintenance 
                    management system, also joined FiloSoft mobile application development team
                </p>

                <p className="text-left">
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
                        AngularJS
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
                        Spring MVC
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
                        Hibernate
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
                        MySQL
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
                        Microsoft SQL Server
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
                        Jenkins
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">
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
                icon={<i className="material-icons m-auto text-3xl">school</i>}
            >
                <div className="flex w-full">
                    <div className="w-1/5">
                        <img className="w-full" src="fortearge.png"></img>
                    </div>
                    <div className="ml-8">
                        <h4 className="vertical-timeline-element-title text-left">
                            <b>Intern</b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-left">
                            ForteArGe Informatics, Engineering, Consultancy Inc.
                        </h5>
                    </div>
                </div>
                
                <p className="text-left">
                    I did my 2016-2017 summer internship by testing both front and backend layer 
                    of FiloSoft with some behavior-driven and e2e test development frameworks
                </p>

                <p className="text-left">
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">                    
                        AngularJS
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">                    
                        JUnit
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">                    
                        Jasmine
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">                    
                        Protractor
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">                    
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
                icon={<i className="material-icons m-auto text-3xl">school</i>}
            >
                <div className="flex w-full">
                    <div className="w-1/5 flex">
                        <img className="w-full m-auto" src="inova.png"></img>
                    </div>
                    <div className="ml-8">
                        <h4 className="vertical-timeline-element-title text-left">
                            <b>Intern</b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-left">
                            İnova Consultancy, Software, Education Inc.
                        </h5>
                    </div>
                </div>
                
                <p className="text-left">
                    I did my 2015– 2016 summer internship by developed simple automation 
                    management module to be used in Türkiye Şişe ve Cam Fabrikaları A.Ş.
                </p>

                <p className="text-left">
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">                    
                        ASP.NET
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">                    
                        Entity Framework
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">                    
                        Microsoft SQL Server
                    </span>
                    <span className="border-1-white p-2 mr-2 border-radius-50 text-xs whitespace-no-wrap float-left mb-2">                    
                        DevExpress
                    </span>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
}

export default Experiences;