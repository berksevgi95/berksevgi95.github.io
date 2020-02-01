import React from 'react'

const Projects = ({
    ...props
}) => {

    return <div className="section projects">

        <div className="w-full flex absolute" style={{height : 200}}>
            <h1 className="h1 white m-auto">
                Projects
            </h1>
        </div>

        <div className="slide">
            <div className="w-full flex" style={{height : 'calc(100% - 350px)'}}>
                <div className="h-full m-auto flex flex-direction-column" style={{width : '80%'}}>
                    <h5 className="h5 white mb-10 mt-10" >
                        Single Page Web Application Templates
                    </h5>
                    <div className="w-full h-full flex relative">

                        <div className="w-full h-full relative">
                            <div className="w-full h-0-5 flex-direction-column flex relative">
                                <h5 className="w-full font-size-20 white mt-15 mb-15" >
                                    Vehicle Admin Page
                                </h5>
                                <div className="w-full font-size-20 white m-auto">
                                    Hypothetic vehicle admin page based on Semantic UI and bootstrapped with
                                    <a href="https://create-react-app.dev/docs/getting-started/">
                                        <img className="mt-5 ml-5" style={{ width: 20 }} src="logo192.png"></img>
                                    </a>
                                </div>
                            </div>
                            <div className="h-0-5">
                                <img className="project-item" src="vehicle-admin.png" />
                            </div>
                        </div>

                        <div className="w-full h-full relative">
                            <div className="w-full h-0-5 flex-direction-column flex relative">
                                <h5 className="w-full font-size-20 white mt-15 mb-15" >
                                    Shards Dashboard Boilerplate
                                </h5>
                                <div className="w-full font-size-20 white m-auto">
                                    Implemented for visualizing kubernetes infrastructures and their 
                                    interactions to provide easy-to-use kubernetes experience
                                </div>
                            </div>
                            <div className="h-0-5">
                                <img className="project-item" src="shards-dashboard.png" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>







        <div className="slide">
            <div className="w-full flex" style={{height : 'calc(100% - 350px)'}}>
                <div className="h-full m-auto flex flex-direction-column" style={{width : '80%'}}>
                    <h5 className="h5 white mb-10 mt-10" >
                        School Projects
                    </h5>
                    <div className="w-full h-full flex relative">

                        <div className="w-full h-full relative">
                            <div className="w-full h-0-5 flex-direction-column flex relative">
                                <h5 className="w-full font-size-20 white mt-15 mb-15" >
                                    What the Food - A Fast-Food Price Estimator
                                </h5>
                                <div className="w-full font-size-20 white m-auto">
                                    Interpreter of a given image as basic classification problems 
                                    with using pre-learned Neural Networks and make price assesment 
                                    with respect to result of these interpretations.
                                </div>
                            </div>
                            <div className="h-0-5">
                                <img className="project-item w-0-5" src="what-the-food.png" />
                            </div>
                        </div>

                        <div className="w-full h-full relative">
                            <div className="w-full h-0-5 flex-direction-column flex relative">
                                <h5 className="w-full font-size-20 white mt-15 mb-15" >
                                    Homemade Drum Pad
                                </h5>
                                <div className="w-full font-size-20 white m-auto">
                                    Midi electronic drum kit implementation with TIVA LaunchPad and the help of
                                    <a style={{ color: 'lightblue', marginLeft: 5 }} href="https://github.com/CemalUnal">
                                        @CemalUnal
                                    </a>
                                </div>
                            </div>
                            <div className="h-0-5">
                                <iframe 
                                    className="project-item"
                                    src="https://www.youtube.com/embed/4qsMQLfBxyE" 
                                    height={'100%'}
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