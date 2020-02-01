import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = ({
    ...props
}) => {

    return <div className="section experiences">
        <div className="flex" style={{height : 300}}>
            <h1 className="h1 white m-auto">
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
                icon={<i className="material-icons font-size-30 m-auto">work</i>}
            >
                <div className="flex w-full">
                    <div style={{width : '20%'}}>
                        <img className="w-full" src="havelsan.png"></img>
                    </div>
                    <div className="ml-15" style={{width : '80%'}}>
                        <h4 className="vertical-timeline-element-title text-align-start">
                            <b>Front-End Software Development</b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-align-start">
                            Havelsan Inc.
                        </h5>
                    </div>
                </div>
                
                <p className="text-align-start">
                    I have been currently working in ASTAR product family to develop ASTARBI which is the 
                    ultimate business intelligence and desicion analysis solution, enabling users to visualize, 
                    analyze, report and compile their business data
                </p>

                <p className="text-align-start">
                    <span className="border-1-white mr-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10">
                        React.js
                    </span>
                    <span className="border-1-white mr-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10">
                        Redux
                    </span>
                    <span className="border-1-white mr-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10">
                        Docker
                    </span>
                    <span className="border-1-white mr-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10">
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
                    <div style={{width : '20%'}}>
                        <img className="w-full" src="fortearge.png"></img>
                    </div>
                    <div className="ml-15" style={{width : '70%'}}>
                        <h4 className="vertical-timeline-element-title text-align-start">
                            <b>Full-Stack Software Development</b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-align-start">
                            ForteArGe Informatics, Engineering, Consultancy Inc.
                        </h5>
                    </div>
                </div>
                
                <p className="text-align-start">
                    Worked as a full-stack developer on FiloSoft – a web-based fleet inventory maintenance 
                    management system, also joined FiloSoft mobile application development team
                </p>

                <p className="text-align-start">
                    <span className="border-1-white mr-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        AngularJS
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        Spring MVC
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        Hibernate
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        MySQL
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        Microsoft SQL Server
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        Jenkins
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
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
                <div className="flex w-full">
                    <div style={{width : '20%'}}>
                        <img className="w-full" src="fortearge.png"></img>
                    </div>
                    <div className="ml-15" style={{width : '70%'}}>
                        <h4 className="vertical-timeline-element-title text-align-start">
                            <b>Intern</b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-align-start">
                            ForteArGe Informatics, Engineering, Consultancy Inc.
                        </h5>
                    </div>
                </div>
                
                <p className="text-align-start">
                    I did my 2016-2017 summer internship by testing both front and backend layer 
                    of FiloSoft with some behavior-driven and e2e test development frameworks
                </p>

                <p className="text-align-start">
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        AngularJS
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        JUnit
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        Jasmine
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        Protractor
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
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
                <div className="flex w-full">
                    <div style={{width : '20%'}}>
                        <img className="w-full" src="fortearge.png"></img>
                    </div>
                    <div className="ml-15" style={{width : '70%'}}>
                        <h4 className="vertical-timeline-element-title text-align-start">
                            <b>Intern</b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-align-start">
                            İnova Consultancy, Software, Education Inc.
                        </h5>
                    </div>
                </div>
                
                <p className="text-align-start">
                    I did my 2015– 2016 summer internship by developed simple automation 
                    management module to be used in Türkiye Şişe ve Cam Fabrikaları A.Ş.
                </p>

                <p className="text-align-start">
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        ASP.NET
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        Entity Framework
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">

                        Microsoft SQL Server
                    </span>
                    <span className="border-1-white mr-5 mb-5 pl-5 pr-5 pt-5 pb-5 border-radius-50 font-size-10 ws-nowrap float-left ">
                        DevExpress
                    </span>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
}

export default Experiences;