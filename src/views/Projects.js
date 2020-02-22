import React from 'react'

const Projects = ({
    ...props
}) => {

    return <div className="section projects">

        <div className="slide">
            <div className="w-full flex " >
                <h1 className="text-4xl md:text-6xl text-white m-auto mb-8">
                    <b>Side Projects</b>
                </h1>
            </div>
            <div className="w-full flex h-05">
                <div className="h-full m-auto flex flex-col w-4/5">
                    <div className="w-full h-full md:flex relative">

                        <div className="w-full h-full flex flex-col justify-between relative mb-24 md:mb-0 px-4">
                            <div className="w-full flex flex-col relative">
                                <h5 className="w-full text-2xl text-white my-2" >
                                    Vehicle Admin Page
                                </h5>
                                <div className="w-full text-white m-auto mb-8 md:mb-0">
                                    Hypothetic vehicle admin page based on Semantic UI and bootstrapped with 
                                    <a href="https://create-react-app.dev/docs/getting-started/">
                                        Create React App
                                    </a>
                                </div>
                            </div>
                            <div className="flex">
                                <img alt="vehicle-admin" className="project-item m-auto" src="vehicle-admin.png" />
                            </div>
                        </div>

                        <div className="w-full h-full relative flex flex-col justify-between mb-24 md:mb-0 px-4">
                            <div className="w-full flex flex-col relative">
                                <h5 className="w-full text-2xl text-white my-2" >
                                    Shards Dashboard Boilerplate
                                </h5>
                                <div className="w-full text-white m-auto mb-8 md:mb-0">
                                    Implemented for visualizing kubernetes infrastructures and their 
                                    interactions to provide easy-to-use kubernetes experience
                                </div>
                            </div>
                            <div className="flex">
                                <img alt="shards-dashboard" className="project-item m-auto" src="shards-dashboard.png" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>







        <div className="slide">
            <div className="w-full flex " >
                <h1 className="text-4xl md:text-6xl text-white m-auto mb-8">
                    <b>School Projects</b>
                </h1>
            </div>
            <div className="w-full flex h-05">
                <div className="h-full m-auto flex flex-col w-4/5">
                    <div className="w-full h-full md:flex relative">

                        <div className="w-full h-full flex flex-col justify-between relative mb-24 md:mb-0 px-4">
                            <div className="w-full flex flex-col relative">
                                <h5 className="w-full text-2xl text-white my-2" >
                                    What the Food - A Fast-Food Price Estimator
                                </h5>
                                <div className="w-full text-white m-auto mb-8 md:mb-0">
                                    Interpreter of a given image as basic classification problems 
                                    with using pre-learned Neural Networks and make price assesment 
                                    with respect to result of these interpretations.
                                </div>
                            </div>
                            <div className="flex">
                                <img alt="what-the-food" style={{width : '50%'}} className="project-item m-auto w-1/2" src="what-the-food.png" />
                            </div>
                        </div>

                        <div className="w-full h-full relative flex flex-col justify-between mb-24 md:mb-0 px-4">
                            <div className="w-full flex flex-col relative">
                                <h5 className="w-full text-2xl text-white my-2" >
                                    Homemade Drum Pad
                                </h5>
                                <div className="w-full text-white m-auto mb-8 md:mb-0">
                                    Midi electronic drum kit implementation with TIVA LaunchPad and the help of
                                    <a style={{ color: 'lightblue', marginLeft: 5 }} href="https://github.com/CemalUnal">
                                        @CemalUnal
                                    </a>
                                </div>
                            </div>
                            <div className="flex">
                                <iframe
                                    title="Midi Electronic Drum Kit"
                                    className="project-item m-auto"
                                    src="https://www.youtube.com/embed/4qsMQLfBxyE"
                                    height={250}
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






    </div>

}

export default Projects;