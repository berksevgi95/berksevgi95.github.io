import React from 'react';

import {
    ArrowRightOutlined,
    SyncOutlined,
    CheckOutlined,
    WarningOutlined,
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
import { autoPlay } from 'react-swipeable-views-utils';

import VAP1 from '../../assets/png/VAP1.png'
import VAP2 from '../../assets/png/VAP2.png'
import VAP3 from '../../assets/png/VAP3.png'
import VAP4 from '../../assets/png/VAP4.png'

import BSTrivia1 from '../../assets/png/BSTrivia1.png'
import BSTrivia2 from '../../assets/png/BSTrivia2.png'
import BSTrivia3 from '../../assets/png/BSTrivia3.png'

import WhatTheFood from '../../assets/png/WhatTheFood.png'
import SwipeableViews from 'react-swipeable-views';

import './Projects.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Projects = ({
    id
}) => {

    const [index, setIndex] = React.useState(0)

    const handleSwipeRight = (_index) => {
        setIndex((index + 1) % 4)
    }

    const handleSwipeLeft = (_index) => {
        setIndex(index - 1 < 0 ? 3 : index - 1)
    }

    return (
        <section id={id} className="projects article">
            <div>
                <h1 className="title">Projects</h1>

                <div className="projects-container">
                    <div
                        className="project-arrows-right"
                        onClick={handleSwipeLeft}
                    >
                        <LeftOutlined className="m-auto" />
                    </div>
                    <SwipeableViews index={index} enableMouseEvents>
                        <div>
                            <div>
                                <h3>Vehicle Admin Page</h3>
                                <div 
                                    style={{
                                        display: 'flex',
                                        marginBottom: 15
                                    }}
                                >
                                    <SyncOutlined
                                        style={{
                                            marginRight: 10
                                        }}
                                    />
                                    On Development
                                </div>
                            </div>
                            <div>
                                Hypothetic vehicle admin page implemented with BS-UI
                            </div>
                            <p>
                                Check live <a className="link" href="https://suspicious-mcnulty-9f5041.netlify.app">demo</a>
                            </p>
                            <AutoPlaySwipeableViews 
                                enableMouseEvents
                                style={{
                                    marginTop: 30
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <img 
                                        src={VAP1} 
                                        style={{
                                            margin: 'auto',
                                            width: '50%'
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <img 
                                        src={VAP2} 
                                        style={{
                                            margin: 'auto',
                                            width: '50%'
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <img 
                                        src={VAP3} 
                                        style={{
                                            margin: 'auto',
                                            width: '50%'
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <img 
                                        src={VAP4} 
                                        style={{
                                            margin: 'auto',
                                            width: '50%'
                                        }}
                                    />
                                </div>
                            </AutoPlaySwipeableViews>
                        </div>
                        <div>
                            <div>
                                <h3>BS Trivia</h3>
                                <div 
                                    style={{
                                        display: 'flex',
                                        marginBottom: 15
                                    }}
                                >
                                    <CheckOutlined
                                        style={{
                                            marginRight: 10
                                        }}
                                    />
                                    Completed
                                </div>
                            </div>
                            <div>
                                Yet another simple trivia game made by BS
                            </div>
                            <p>
                                Check live <a className="link" href="https://boring-johnson-478048.netlify.app/">demo</a>
                            </p>
                            <AutoPlaySwipeableViews 
                                enableMouseEvents
                                style={{
                                    marginTop: 30
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <img 
                                        src={BSTrivia1} 
                                        style={{
                                            margin: 'auto',
                                            width: '50%'
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <img 
                                        src={BSTrivia2} 
                                        style={{
                                            margin: 'auto',
                                            width: '50%'
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex'
                                    }}
                                >
                                    <img 
                                        src={BSTrivia3} 
                                        style={{
                                            margin: 'auto',
                                            width: '50%'
                                        }}
                                    />
                                </div>
                            </AutoPlaySwipeableViews>
                        </div>
                        <div>
                            <div>
                                <h3>What the Food - A Fast-Food Price Estimator</h3>
                                <div 
                                    style={{
                                        display: 'flex',
                                        marginBottom: 15
                                    }}
                                >
                                    <WarningOutlined
                                        style={{
                                            marginRight: 10
                                        }}
                                    />
                                    Obsolete
                                </div>
                            </div>
                            <div>
                                Interpreter of a given image as basic classification problems with using pre-learned Neural Networks and make price assesment with respect to result of these interpretations.
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    marginTop: 30
                                }}
                            >
                                <img
                                    src={WhatTheFood}
                                    style={{
                                        margin: 'auto'
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Homemade Drum Pad</h3>
                                <div 
                                    style={{
                                        display: 'flex',
                                        marginBottom: 15
                                    }}
                                >
                                    <CheckOutlined
                                        style={{
                                            marginRight: 10
                                        }}
                                    />
                                    Completed
                                </div>
                            </div>
                            <div>
                                Midi electronic drum kit implementation with TIVA LaunchPad and the help of <a className="link" href="https://github.com/CemalUnal">@CemalUnal</a>
                            </div>
                            <div
                                style={{
                                    marginTop: 30,
                                    display: 'flex'
                                }}
                            >
                                <iframe
                                    title="Midi Electronic Drum Kit"
                                    className="w-full md:w-1/3 mt-4 m-auto"
                                    src="https://www.youtube.com/embed/4qsMQLfBxyE"
                                    height={480}
                                    width={640}
                                    style={{
                                        margin: 'auto'
                                    }}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </SwipeableViews>
                    <div
                        className="project-arrows-left"
                        onClick={handleSwipeRight}
                    >
                        <RightOutlined className="m-auto" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects;