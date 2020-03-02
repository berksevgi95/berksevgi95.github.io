import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FormattedMessage } from 'react-intl';

const Experiences = ({
    ...props
}) => {

    return <div className="section experiences">
        <div className="flex h-56">
            <h1 className="text-4xl md:text-6xl text-white m-auto">
                <b><FormattedMessage id="experiences"/></b>
            </h1>
        </div>

        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work left"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={
                    <React.Fragment>
                        <FormattedMessage id="january"/>
                        {` 2019 - `}
                        <FormattedMessage id="present"/>
                    </React.Fragment>
                }
                iconStyle={{ 
                    background: 'rgb(33, 150, 243)', 
                    color: '#fff',
                    display : 'flex'
                }}
                icon={<i className="material-icons font-size-30 m-auto">work</i>}
            >
                <div className="flex w-full">
                    <div className="w-1/5">
                        <img alt="havelsan" className="w-full" src="havelsan.png"></img>
                    </div>
                    <div className="ml-8">
                        <h4 className="vertical-timeline-element-title text-left">
                            <b><FormattedMessage id="front.end.software.development"/></b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-left">
                            <FormattedMessage id="havelsan.inc"/>
                        </h5>
                    </div>
                </div>
                
                <p className="text-left">
                    <FormattedMessage id="havelsan.explanation"/>
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
                date={
                    <React.Fragment>
                        <FormattedMessage id="august"/>
                        {` 2017 - `}
                        <FormattedMessage id="december"/>
                        {` 2018`}
                    </React.Fragment>
                }
                iconStyle={{ 
                    background: 'rgb(33, 150, 243)', 
                    color: '#fff',
                    display : 'flex'
                }}
                icon={<i className="material-icons font-size-30 m-auto">work</i>}
            >
                <div className="flex w-full">
                    <div className="w-1/5">
                        <img alt="fortearge" className="w-full" src="fortearge.png"></img>
                    </div>
                    <div className="ml-8">
                        <h4 className="vertical-timeline-element-title text-left">
                            <b><FormattedMessage id="full.stack.software.development"/></b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-left">
                            <FormattedMessage id="forte.arge"/>
                        </h5>
                    </div>
                </div>
                
                <p className="text-left">
                    <FormattedMessage id="forte.arge.explanation"/>
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
                date = {
                    <React.Fragment>
                        <FormattedMessage id="june"/>
                        {` 2017 - `}
                        <FormattedMessage id="august"/>
                        {` 2017`}
                    </React.Fragment>
                }
                iconStyle={{ 
                    background: 'rgb(33, 150, 243)', 
                    color: '#fff',
                    display : 'flex'
                }}
                icon={<i className="material-icons m-auto text-3xl">school</i>}
            >
                <div className="flex w-full">
                    <div className="w-1/5">
                        <img alt="fortearge" className="w-full" src="fortearge.png"></img>
                    </div>
                    <div className="ml-8">
                        <h4 className="vertical-timeline-element-title text-left">
                            <b><FormattedMessage id="intern"/></b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-left">
                            <FormattedMessage id="forte.arge"/>
                        </h5>
                    </div>
                </div>
                
                <p className="text-left">
                    <FormattedMessage id="intern.explanation" />
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
                date={
                    <React.Fragment>
                        <FormattedMessage id="august"/>
                        {` 2016 - `}
                        <FormattedMessage id="december"/>
                        {` 2016`}
                    </React.Fragment>
                }
                iconStyle={{ 
                    background: 'rgb(33, 150, 243)', 
                    color: '#fff',
                    display : 'flex'
                }}
                icon={<i className="material-icons m-auto text-3xl">school</i>}
            >
                <div className="flex w-full">
                    <div className="w-1/5 flex">
                        <img alt="inova" className="w-full m-auto" src="inova.png"></img>
                    </div>
                    <div className="ml-8">
                        <h4 className="vertical-timeline-element-title text-left">
                            <b><FormattedMessage id="intern"/></b>
                        </h4>
                        <h5 className="vertical-timeline-element-subtitle text-left">
                            <FormattedMessage id="inova"/>
                        </h5>
                    </div>
                </div>
                
                <p className="text-left">
                    <FormattedMessage id="inova.explanation"/>
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