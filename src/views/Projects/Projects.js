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
        <article id={id} className="h-full overflow-auto view">
            <div className="relative w-full h-full md:h-auto">
                <h1 className="title">Projects</h1>

                <div className="flex">
                    <div
                        className="h-full flex"
                        style={{ display: 'contents' }}
                        onClick={handleSwipeLeft}
                    >
                        <LeftOutlined className="m-auto" />
                    </div>
                    <SwipeableViews index={index} enableMouseEvents>
                        <div className="w-full">
                            <div className="md:flex items-center justify-between">
                                <h3>Vehicle Admin Page</h3>
                                <div className="flex items-center">
                                    <div className="pin">
                                        <SyncOutlined />
                                    </div>
                                    On Development
                                </div>
                            </div>
                            <div>
                                Hypothetic vehicle admin page implemented with BS-UI
                            </div>
                            <div className="mt-2">
                                Check live <a className="link" href="https://suspicious-mcnulty-9f5041.netlify.app">demo</a>
                            </div>
                            <AutoPlaySwipeableViews className="mt-8" enableMouseEvents>
                                <img src={VAP1} className="w-full md:w-1/3 m-auto" />
                                <img src={VAP2} className="w-full md:w-1/3 m-auto" />
                                <img src={VAP3} className="w-full md:w-1/3 m-auto" />
                                <img src={VAP4} className="w-full md:w-1/3 m-auto" />
                            </AutoPlaySwipeableViews>
                        </div>
                        <div className="w-full">
                            <div className="md:flex items-center justify-between">
                                <h3>BS Trivia</h3>
                                <div className="flex items-center">
                                    <div className="pin completed">
                                        <CheckOutlined />
                                    </div>
                                    Completed
                                </div>
                            </div>
                            <div>
                                Yet another simple trivia game made by BS
                        </div>
                            <div className="mt-2">
                                Check live <a className="link" href="https://boring-johnson-478048.netlify.app/">demo</a>
                            </div>
                            <AutoPlaySwipeableViews className="mt-8" enableMouseEvents>
                                <img src={BSTrivia1} className="w-full md:w-1/3 m-auto" />
                                <img src={BSTrivia2} className="w-full md:w-1/3 m-auto" />
                                <img src={BSTrivia3} className="w-full md:w-1/3 m-auto" />
                            </AutoPlaySwipeableViews>
                        </div>
                        <div className="w-full">
                            <div className="md:flex items-center justify-between">
                                <h3>What the Food - A Fast-Food Price Estimator</h3>
                                <div className="flex items-center">
                                    <div className="pin obsolete">
                                        <WarningOutlined />
                                    </div>
                                Obsolete
                            </div>
                            </div>
                            <div>
                                Interpreter of a given image as basic classification problems with using pre-learned Neural Networks and make price assesment with respect to result of these interpretations.
                        </div>
                            <img src={WhatTheFood} className="w-full mt-4 md:w-1/4 m-auto" />
                        </div>
                        <div className="w-full">
                            <div className="md:flex items-center justify-between">
                                <h3>Homemade Drum Pad</h3>
                                <div className="flex items-center">
                                    <div className="pin completed">
                                        <CheckOutlined />
                                    </div>
                                Completed
                            </div>
                            </div>
                            <div>
                                Midi electronic drum kit implementation with TIVA LaunchPad and the help of <a className="link" href="https://github.com/CemalUnal">@CemalUnal</a>
                            </div>
                            <iframe
                                title="Midi Electronic Drum Kit"
                                className="w-full md:w-1/3 mt-4 m-auto"
                                src="https://www.youtube.com/embed/4qsMQLfBxyE"
                                height={250}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </SwipeableViews>
                    <div
                        className="h-full flex"
                        style={{ display: 'contents' }}
                        onClick={handleSwipeRight}
                    >
                        <RightOutlined className="m-auto" />
                    </div>
                </div>

                <div className="continue">
                    <a href="#activities">Click to continue <ArrowRightOutlined /></a>
                </div>
            </div>
        </article>
    )
}

export default Projects;