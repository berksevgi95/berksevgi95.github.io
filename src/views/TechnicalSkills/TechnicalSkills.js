import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';

import './TechnicalSkills.css'
import Star from '../../components/Star/Star';

const TechnicalSkills = ({
    id
}) => {
    return (
        <article id={id} className="technical-skills article">
            <div className="full-container">
                <h1 className="title">Technical Skills</h1>
                <div className="technical-skills-titles">
                    <div>
                        <h3>Skills</h3>
                        <div>
                            <div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">React.js</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">Angular</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">AngularJS</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">Vue.js</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">HTML/CSS/JavaScript</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">Jest/Enzyme</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">Protractor/Karma/Jasmine</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">Webpack/Gulp</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">UI/UX</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">Node.js</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={5} />
                                    <span className="technical-skills-items-title">MongoDB</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={4} />
                                    <span className="technical-skills-items-title">SpringMVC/Spring Boot</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={4} />
                                    <span className="technical-skills-items-title">Hibernate</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={4} />
                                    <span className="technical-skills-items-title">MySQL/Oracle</span>
                                </div>
                            </div>

                            <div>
                                <div className="technical-skills-items">
                                    <Star rank={4} />
                                    <span className="technical-skills-items-title">Apache Kafka</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={4} />
                                    <span className="technical-skills-items-title">Dart/Flutter</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={4} />
                                    <span className="technical-skills-items-title">React Native</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={4} />
                                    <span className="technical-skills-items-title">Android SDK</span>
                                </div>
                                <div className="technical-skills-items">
                                    <Star rank={3} />
                                    <span className="technical-skills-items-title">Embedded Programming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4">Programming Language Skills</h3>
                        <div>
                            <div className="technical-skills-items">
                                <Star rank={3} />
                                <span className="technical-skills-items-title">C</span>
                            </div>
                            <div className="technical-skills-items">
                                <Star rank={4} />
                                <span className="technical-skills-items-title">Java</span>
                            </div>
                            <div className="technical-skills-items">
                                <Star rank={3} />
                                <span className="technical-skills-items-title">C++</span>
                            </div>
                            <div className="technical-skills-items">
                                <Star rank={3} />
                                <span className="technical-skills-items-title">C#</span>
                            </div>
                            <div className="technical-skills-items">
                                <Star rank={5} />
                                <span className="technical-skills-items-title">JavaScript</span>
                            </div>
                            <div className="technical-skills-items">
                                <Star rank={3} />
                                <span className="technical-skills-items-title">Python</span>
                            </div>
                            <div className="technical-skills-items">
                                <Star rank={3} />
                                <span className="technical-skills-items-title">MATLAB</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4">Language Skills</h3>
                        <div>
                            <div className="technical-skills-items">
                                <Star rank={3} />
                                <span className="technical-skills-items-title">English</span>
                            </div>
                            <div className="technical-skills-items">
                                <Star rank={1} />
                                <span className="technical-skills-items-title">Russian</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default TechnicalSkills;