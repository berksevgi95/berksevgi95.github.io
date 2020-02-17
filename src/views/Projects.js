import React from 'react'

const Projects = ({
    ...props
}) => {

    return <div className="section projects">

        <div className="w-full flex absolute h-56" >
            <h1 className="text-6xl text-white m-auto">
                <b>Projects</b>
            </h1>
        </div>

        <div className="slide">
            <div className="w-full flex" style={{height : 'calc(100% - 350px)'}}>
                <div className="h-full m-auto flex flex-col w-4/5">
                    <h5 className="text-3xl text-white my-4" >
                        <b>Single Page Web Application Templates</b>
                    </h5>
                    <div className="w-full h-full flex relative">

                        <div className="w-full h-full relative grid mx-4">
                            <div className="w-full flex flex-col relative">
                                <h5 className="w-full text-2xl text-white my-2" >
                                    Vehicle Admin Page
                                </h5>
                                <div className="w-full text-white m-auto">
                                    Hypothetic vehicle admin page based on Semantic UI and bootstrapped with 
                                    <a href="https://create-react-app.dev/docs/getting-started/">
                                        Create React App
                                    </a>
                                </div>
                            </div>
                            <div className="flex">
                                <img className="project-item m-auto" src="vehicle-admin.png" />
                            </div>
                        </div>

                        <div className="w-full h-full relative grid mx-4">
                            <div className="w-full flex flex-col relative">
                                <h5 className="w-full text-2xl text-white my-2" >
                                    Shards Dashboard Boilerplate
                                </h5>
                                <div className="w-full text-white m-auto">
                                    Implemented for visualizing kubernetes infrastructures and their 
                                    interactions to provide easy-to-use kubernetes experience
                                </div>
                            </div>
                            <div className="flex">
                                <img className="project-item m-auto" src="shards-dashboard.png" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>







        <div className="slide">
            <div className="w-full flex" style={{height : 'calc(100% - 350px)'}}>
                <div className="h-full m-auto flex flex-col w-4/5">
                    <h5 className="text-3xl text-white my-4" >
                        <b>School Projects</b>
                    </h5>
                    <div className="w-full h-full flex relative">

                        <div className="w-full h-full relative grid mx-4">
                            <div className="w-full flex flex-col relative">
                                <h5 className="w-full text-2xl text-white my-2" >
                                    What the Food - A Fast-Food Price Estimator
                                </h5>
                                <div className="w-full text-white m-auto">
                                    Interpreter of a given image as basic classification problems 
                                    with using pre-learned Neural Networks and make price assesment 
                                    with respect to result of these interpretations.
                                </div>
                            </div>
                            <div className="flex">
                                <img style={{width : '50%'}} className="project-item m-auto" src="what-the-food.png" />
                            </div>
                        </div>

                        <div className="w-full h-full relative grid mx-4">
                            <div className="w-full flex flex-col relative">
                                <h5 className="w-full text-2xl text-white my-2" >
                                    Homemade Drum Pad
                                </h5>
                                <div className="w-full text-white mt-2">
                                    Midi electronic drum kit implementation with TIVA LaunchPad and the help of
                                    <a style={{ color: 'lightblue', marginLeft: 5 }} href="https://github.com/CemalUnal">
                                        @CemalUnal
                                    </a>
                                </div>
                            </div>
                            <div className="flex">
                                <iframe 
                                    className="project-item m-auto"
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