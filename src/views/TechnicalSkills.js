import React from 'react'

const TechnicalSkills = ({
    ...props
}) => {

    const containerRef = React.useRef()

    const scrollRight = (e) => {
        containerRef.current.scrollTo({
            left: containerRef.current.scrollLeft + 600, 
            behavior: 'smooth' 
        });
    }

    const scrollLeft = (e) => {
        containerRef.current.scrollTo({
            left: containerRef.current.scrollLeft - 600, 
            behavior: 'smooth' 
        });
    }

    return <div className="section technicalskills">

        <div className="flex" style={{height : 200}}>
            <h1 className="h1 white m-auto">
                Technical Skills
            </h1>
        </div>

        <div ref={containerRef} className="flex overflow-hidden align-center">
            <div onClick={scrollLeft} className="left-arrow">
                <span></span>
            </div>
            <div className="padding-left-50">
                <div className="card">
                    <i style={{fontSize : 90}} className="material-icons">language</i>
                    <div className="mt-20 mb-20">
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
                    <img style={{width : 90}} src="database.png"/>
                    <div className="mt-20 mb-20">
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
                    <img style={{width : 200}} src="spa_icons.png"/>
                    <div className="mt-20 mb-20">
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
                    <i style={{fontSize : 90}} className="material-icons">phone_iphone</i>
                    <div className="mt-20 mb-20">
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
                    <i style={{fontSize : 90}} className="material-icons">share</i>
                    <div className="mt-20 mb-20">
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
                    <i style={{fontSize : 90}} className="material-icons">memory</i>
                    <div className="mt-20 mb-20">
                        <span>Embedded system programming</span>
                    </div>
                    <span className="card-element">
                        TI TivaTM C Series
                    </span>
                    <span className="card-element">
                        Raspberry Pi
                    </span>
                </div>
            </div>
            <div className="padding-right-50">
                <div className="card">
                    <i style={{fontSize : 90}} className="material-icons">call_split</i>
                    <div className="mt-20 mb-20">
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
            <div onClick={scrollRight} className="right-arrow">
                <span></span>
            </div>
        </div>

        <div className="arrow">
            <span></span>
            Scroll to Continue
        </div>
    </div>

}

export default TechnicalSkills;