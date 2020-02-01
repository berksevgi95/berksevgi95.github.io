import React from 'react'

const Projects = ({
    ...props
}) => {

    return <div className="section projects">

        <div style={{
            width: '100%',
            height: 200,
            display: 'flex',
            position : 'absolute'
        }}>
            <h1 className="titleexperiences">
                Projects
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
                    <span style={{fontSize : 35, fontWeight : 'bolder', color : 'white'}}>
                        Single Page Web Application Templates
                    </span>
                    <div style={{width :'100%', height : '100%', display : 'flex', position : 'relative'}}>

                        <div style={{
                            width : '100%', 
                            height : '100%', 
                            position : 'relative',
                        }}>
                            <div style={{height : '50%', display : 'flex', flexDirection : 'column'}}>
                                <div style={{
                                    width: '100%',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    margin : 'auto',
                                    marginBottom : 0
                                }}>Vehicle Admin Page</div>
                                <div style={{
                                    width: '100%',
                                    fontSize: 20,
                                    color: 'white',
                                    margin : 'auto'
                                }}>
                                    Hypothetic vehicle admin page based on Semantic UI and bootstrapped with
                                    <a href="https://create-react-app.dev/docs/getting-started/">
                                        <img style={{ width: 20, marginTop: 5, marginLeft: 5 }} src="logo192.png"></img>
                                    </a>
                                </div>
                            </div>
                            <div style={{height : '50%'}}>
                                <img style={{
                                    width: '80%',
                                    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'

                                }} src="vehicle-admin.png" />
                            </div>
                            
                            
                        </div>

                        <div style={{
                            width : '100%', 
                            height : '100%', 
                            position : 'relative',
                        }}>
                            <div style={{height : '50%', display : 'flex', flexDirection : 'column'}}>
                                <div style={{
                                    width: '100%',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    margin : 'auto',
                                    marginBottom : 0
                                }}>Shards Dashboard Boilerplate</div>
                                <div style={{
                                    width: '100%',
                                    fontSize: 20,
                                    color: 'white',
                                    margin : 'auto'
                                }}>
                                    Implemented for visualizing kubernetes infrastructures and their 
                                    interactions to provide easy-to-use kubernetes experience
                                </div>
                            </div>
                            <div style={{height : '50%'}}>
                                <img style={{
                                    width: '80%',
                                    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'

                                }} src="shards-dashboard.png" />
                            </div>
                            
                            
                        </div>

                    </div>
                </div>
            </div>
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
                    <span style={{fontSize : 35, fontWeight : 'bolder', color : 'white'}}>
                        School Projects
                    </span>
                    <div style={{width :'100%', height : '100%', display : 'flex', position : 'relative'}}>

                        <div style={{
                            width : '100%', 
                            height : '100%', 
                            position : 'relative',
                        }}>
                            <div style={{height : '50%', display : 'flex', flexDirection : 'column'}}>
                                <div style={{
                                    width: '100%',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    margin : 'auto',
                                    marginBottom : 0
                                }}>What the Food - A Fast-Food Price Estimator</div>
                                <div style={{
                                    width: '100%',
                                    fontSize: 20,
                                    color: 'white',
                                    margin : 'auto'
                                }}>
                                    Interpreter of a given image as basic classification problems 
                                    with using pre-learned Neural Networks and make price assesment 
                                    with respect to result of these interpretations.
                                </div>
                            </div>
                            <div style={{height : '50%'}}>
                                <img style={{
                                    width: '50%',
                                    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'

                                }} src="what-the-food.png" />
                            </div>
                            
                            
                        </div>

                        <div style={{
                            width : '100%', 
                            height : '100%', 
                            position : 'relative',
                        }}>
                            <div style={{height : '50%', display : 'flex', flexDirection : 'column'}}>
                                <div style={{
                                    width: '100%',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    margin : 'auto',
                                    marginBottom : 0
                                }}>Homemade Drum Pad</div>
                                <div style={{
                                    width: '100%',
                                    fontSize: 20,
                                    color: 'white',
                                    margin : 'auto'
                                }}>
                                    Midi electronic drum kit implementation with TIVA LaunchPad and the help of
                                    <a style={{color : 'lightblue', marginLeft : 5}} href="https://github.com/CemalUnal">
                                        @CemalUnal
                                    </a>
                                </div>
                            </div>
                            <div style={{height : '50%'}}>
                                <iframe 
                                    style={{
                                        width: '100%',
                                        height : '100%',
                                        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
                                    }}
                                    src="https://www.youtube.com/embed/4qsMQLfBxyE" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
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

export default Projects;