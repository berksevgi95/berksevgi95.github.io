import 'react-perfect-scrollbar/dist/css/styles.css';

import React from 'react'

import PerfectScrollbar from 'react-perfect-scrollbar'

const TechnicalSkills = ({
    ...props
}) => {

    return <div className="section technicalskills">

        <div className="flex" >
            <h1 className="text-4xl md:text-6xl text-white m-auto">
                <b>Technical Skills</b>
            </h1>
        </div>

        <div>
            <PerfectScrollbar className="flex">
                <div className="pl-8">
                    <div className="card">
                        <i className="material-icons text-6xl">language</i>
                        <div className="my-2">
                            <span>Web-based software development and relational database management on Java and ASP.NET</span>
                        </div>
                        <span className="card-element">
                            Spring Framework
                    </span>
                        <span className="card-element">
                            Hibernate ORM
                    </span>
                        <span className="card-element">
                            DevExpress
                    </span>
                        <span className="card-element">
                            Entity Framework
                    </span>
                        <span className="card-element">
                            JSF/PrimeFaces
                    </span>
                        <span className="card-element">
                            JSP
                    </span>
                        <span className="card-element">
                            HTML
                    </span>
                        <span className="card-element">
                            CSS
                    </span>
                        <span className="card-element">
                            SASS
                    </span>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img alt="database" style={{ width: 65 }} className="m-auto mb-4" src="database.png" />
                        <div className="my-2">
                            <span>Relational and Non-Relational database designing and management</span>
                        </div>
                        <span className="card-element">
                            Oracle
                    </span>
                        <span className="card-element">
                            MySQL
                    </span>
                        <span className="card-element">
                            PostgreSQL
                    </span>
                        <span className="card-element">
                            MSSQL
                    </span>
                        <span className="card-element">
                            MongoDB
                    </span>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img alt="spa_icons" style={{ width: 130 }} className="m-auto mb-4" src="spa_icons.png" />
                        <div className="my-2">
                            <span>Single-page web application development and optimization with JavaScript and TypeScript frameworks & libraries</span>
                        </div>
                        <span className="card-element">
                            Angular
                    </span>
                        <span className="card-element">
                            AngularJS
                    </span>
                        <span className="card-element">
                            React
                    </span>
                        <span className="card-element">
                            Vue.js
                    </span>
                        <span className="card-element">
                            Gulp
                    </span>
                        <span className="card-element">
                            Webpack
                    </span>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <i className="material-icons text-6xl">phone_iphone</i>

                        <div className="my-2">
                            <span>Mobile application development</span>
                        </div>
                        <span className="card-element">
                            Android SDK
                    </span>
                        <span className="card-element">
                            React Native
                    </span>
                        <span className="card-element">
                            Dart & Flutter
                    </span>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <i className="material-icons text-6xl">share</i>
                        <div className="my-2">
                            <span>Convolutional Neural Network implementation</span>
                        </div>
                        <span className="card-element">
                            Python
                    </span>
                        <span className="card-element">
                            NumPy
                    </span>
                        <span className="card-element">
                            MATLAB & MathConvNet
                    </span>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <i className="material-icons text-6xl">memory</i>
                        <div className="my-2">
                            <span>Embedded system programming</span>
                        </div>
                        <span className="card-element">
                            TI Tiva C Series
                    </span>
                        <span className="card-element">
                            Raspberry Pi
                    </span>
                    </div>
                </div>
                <div className="pr-8">
                    <div className="card">
                        <i className="material-icons text-6xl">call_split</i>
                        <div className="my-2">
                            <span>Software version automation, controlling and Continious Integration experience</span>
                        </div>
                        <span className="card-element">
                            SVN
                    </span>
                        <span className="card-element">
                            Git
                    </span>
                        <span className="card-element">
                            Jenkins
                    </span>
                    </div>
                </div>

            </PerfectScrollbar>
            {/* <div onClick={scrollRight} className="right-arrow">
                <span></span>
            </div> */}
        </div>

        <div className="arrow">
            <span></span>
            Scroll to Continue
        </div>
    </div>

}

export default TechnicalSkills;