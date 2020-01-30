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

        <div style={{
            width: '100%',
            height: 200,
            display: 'flex'
        }}>
            <h1 className="titleexperiences">
                Technical Skills
            </h1>
        </div>

        <div ref={containerRef} style={{
            display : 'flex',
            alignItems : 'center',
            overflow : 'hidden'
        }}>
            <div onClick={scrollLeft} className="left-arrow">
                <span></span>
            </div>
            <div style={{paddingLeft : 50}}>
                <div class="card">
                    <i style={{fontSize : 90}} class="material-icons">language</i>
                    <div style={{marginTop : 20, marginBottom : 20}}>
                        <span>Web-based software development and relational database management on Java and ASP.NET</span>
                    </div>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Spring Framework
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Hibernate ORM
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        DevExpress
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
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
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        JSF/PrimeFaces
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        JSP
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        HTML
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        CSS
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        SASS
                    </span>
                </div>
            </div>
            <div>
                <div class="card">
                    <img style={{width : 90}} src="database.png"/>
                    <div style={{marginTop : 20, marginBottom : 20}}>
                        <span>Relational and Non-Relational database designing and management</span>
                    </div>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Oracle
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
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
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        PostgreSQL
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        MSSQL
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        MongoDB
                    </span>
                </div>
            </div>
            <div>
                <div class="card">
                    <img style={{width : 200}} src="spa_icons.png"/>
                    <div style={{marginTop : 20, marginBottom : 20}}>
                        <span>Single-page web application development and optimization with JavaScript and TypeScript frameworks & libraries</span>
                    </div>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Angular
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        AngularJS
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        React
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Vue.js
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Gulp
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Webpack
                    </span>
                </div>
            </div>
            <div>
                <div class="card">
                    <i style={{fontSize : 90}} class="material-icons">phone_iphone</i>
                    <div style={{marginTop : 20, marginBottom : 20}}>
                        <span>Mobile application development</span>
                    </div>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Android SDK
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        React Native
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Dart & Flutter
                    </span>
                </div>
            </div>
            <div>
                <div class="card">
                    <i style={{fontSize : 90}} class="material-icons">share</i>
                    <div style={{marginTop : 20, marginBottom : 20}}>
                        <span>Convolutional Neural Network implementation</span>
                    </div>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Python
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        NumPy
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        MATLAB & MathConvNet
                    </span>
                </div>
            </div>
            <div>
                <div class="card">
                    <i style={{fontSize : 90}} class="material-icons">memory</i>
                    <div style={{marginTop : 20, marginBottom : 20}}>
                        <span>Embedded system programming</span>
                    </div>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        TI TivaTM C Series
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Raspberry Pi
                    </span>
                </div>
            </div>
            <div style={{paddingRight : 50}}>
                <div class="card">
                    <i style={{fontSize : 90}} class="material-icons">call_split</i>
                    <div style={{marginTop : 20, marginBottom : 20}}>
                        <span>Software version automation, controlling and Continious Integration experience</span>
                    </div>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        SVN
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
                        Git
                    </span>
                    <span style={{
                        float : 'left',
                        marginBottom : 5,
                        marginRight : 5,
                        padding: 5,
                        borderRadius: 50,
                        border: '1px solid',
                        fontSize: 12,
                        whiteSpace : 'nowrap'
                    }}>
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