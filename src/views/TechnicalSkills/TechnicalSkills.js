import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';

import './TechnicalSkills.css'
import Star from '../../components/Star/Star';

const TechnicalSkills = ({
    id
}) => {
    return (
        <article id={id} className="h-full overflow-auto view">
            <div className="w-full h-full md:h-auto">
                <h1 className="title">Technical Skills</h1>
                <div>
                    <div className="md:flex justify-between">
                        <div>
                            <h3 className="mb-4">Skills</h3>
                            <div className="block md:flex">
                                <div className="mr-6">
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">React.js</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">Angular</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">AngularJS</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">Vue.js</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">HTML/CSS/JavaScript</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">Jest/Enzyme</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">Protractor/Karma/Jasmine</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">Webpack/Gulp</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">UI/UX</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">Node.js</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={5} />
                                        <span className="ml-4">MongoDB</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={4} />
                                        <span className="ml-4">SpringMVC/Spring Boot</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={4} />
                                        <span className="ml-4">Hibernate</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={4} />
                                        <span className="ml-4">MySQL/Oracle</span>
                                    </div>
                                </div>

                                <div className="mr-6">
                                    <div className="flex items-center mb-4">
                                        <Star rank={4} />
                                        <span className="ml-4">Apache Kafka</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={4} />
                                        <span className="ml-4">Dart/Flutter</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={4} />
                                        <span className="ml-4">React Native</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={4} />
                                        <span className="ml-4">Android SDK</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Star rank={3} />
                                        <span className="ml-4">Embedded Programming</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mr-6">
                            <h3 className="mb-4">Programming Language Skills</h3>
                            <div>
                                <div className="flex items-center mb-4">
                                    <Star rank={3} />
                                    <span className="ml-4">C</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={4} />
                                    <span className="ml-4">Java</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={3} />
                                    <span className="ml-4">C++</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={3} />
                                    <span className="ml-4">C#</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={5} />
                                    <span className="ml-4">JavaScript</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={3} />
                                    <span className="ml-4">Python</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={3} />
                                    <span className="ml-4">MATLAB</span>
                                </div>
                            </div>
                        </div>
                        <div className="mr-6">
                            <h3 className="mb-4">Language Skills</h3>
                            <div>
                                <div className="flex items-center mb-4">
                                    <Star rank={3} />
                                    <span className="ml-4">English</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={1} />
                                    <span className="ml-4">Russian</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="continue">
                        <a href="#projects">Click to continue <ArrowRightOutlined /></a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default TechnicalSkills;