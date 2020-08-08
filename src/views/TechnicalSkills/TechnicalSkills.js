import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';

import './TechnicalSkills.css'
import Star from '../../components/Star/Star';

const TechnicalSkills = ({
    id
}) => {
    return (
        <article id={id} className="h-full overflow-auto view">
            <div className="w-full">
                <h1 className="title">Technical Skills</h1>
                <div>
                    <div className="md:flex justify-between">
                        <div>
                            <h3>Software Development Skills</h3>
                            <div>
                                <div className="flex items-center mb-4">
                                    <Star rank={5} />
                                    <span className="ml-4">Web development projects</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={5} />
                                    <span className="ml-4">Front-End Web Development</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={5} />
                                    <span className="ml-4">Web-based software engineering</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={5} />
                                    <span className="ml-4">HTML</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={5} />
                                    <span className="ml-4">CSS</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={4} />
                                    <span className="ml-4">Database programming</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={4} />
                                    <span className="ml-4">Software Documentation</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={4} />
                                    <span className="ml-4">Data collection and analysis</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={3} />
                                    <span className="ml-4">Agile</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={3} />
                                    <span className="ml-4">Testing and maintenance</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star rank={3} />
                                    <span className="ml-4">Design patterns and principles</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Programming Language Skills</h3>
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
                        <div>
                            <h3>Language Skills</h3>
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