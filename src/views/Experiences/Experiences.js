import React from 'react';
import Timeline, { Event } from '../../components/Timeline/Timeline';
import { ArrowRightOutlined } from '@ant-design/icons';

import './Experiences.css'

const Experiences = ({
    id
}) => {
    return (
        <section id={id} className="experiences article">
            <div className="content">
                <h1 className="title">Experiences</h1>
                <Timeline className="pl-6">
                    <Event
                        title="Full-Stack Developer"
                        subtitle="Tomboprint, Ankara, Turkey"
                        dateInterval="2021-03 - Current"
                    >
                        <div>
                            Currently working as a full-stack developer and responsible for testing & optimization on Tomboprint platform which helps to easily manage printer clusters within a secure way.
                        </div>
                    </Event>
                    <Event
                        title="Full-Stack Developer"
                        subtitle="Alyo, Ankara, Turkey"
                        dateInterval="2020-08 - 2021-03"
                    >
                        <ul>
                            <li>
                                Worked as developer and supporter on Anvato Media Content Platform, a GCP based platform for encoding, editing, publishing and distribution video across platforms.
                            </li>
                            <li>
                                Worked on the Lura project which is an environment of content right management, entitlements, access and monetization of media assets.
                            </li>
                        </ul>
                    </Event>
                    <Event
                        title="Front-End Developer"
                        subtitle="DataBoss Security & Analytics, Ankara, Turkey"
                        dateInterval="2020-05 - 2020-08"
                    >
                        <ul>
                            <li>
                                Worked as a Front-End developer on AKIS project which is an interactive crawler management system to be used for investigation of the content on various news sites and social medias.
                            </li>
                            <li>
                                Experienced on live data streaming bootstrapped via Kafka from unmanned combat air vehicle into a web application interface.
                            </li>
                        </ul>
                    </Event>
                    <Event
                        title="Front-End Developer"
                        subtitle="Havelsan, Ankara, Turkey"
                        dateInterval="2019-01 - 2020-05"
                    >
                        <div>
                            Worked for ASTAR product family to develop ASTARBI which is ultimate business intelligence and desicion analysis solution, enabling users to visualize, analyze, report, and compile their business data
                        </div>
                    </Event>
                    <Event
                        title="Full-Stack Software Developer"
                        subtitle="ForteArGe Informatics, Engineering, Consultancy, Ankara, Turkey"
                        dateInterval="2017-08 - 2018-12"
                    >
                        <ul>
                            <li>
                                Worked as full-stack developer on FiloSoft - web based fleet inventory maintenance management system
                            </li>
                            <li>
                                Joined FiloSoft mobile application development team.
                            </li>
                        </ul>
                    </Event>
                    <Event
                        title="Intern"
                        subtitle="ForteArGe Informatics, Engineering, Consultancy, Ankara, Turkey"
                        dateInterval="2017-06 - 2017-08"
                    >
                        <div>
                            Completed 2016-2017 summer internship by testing both front and backend layer of FiloSoft with some behavior-driven and e2e test development frameworks
                        </div>
                    </Event>
                    <Event
                        title="Intern"
                        subtitle="İnova Consultancy, Software, Education Inc., Ankara, Turkey"
                        dateInterval="2016-06 - 2016-07"
                    >
                        <div>
                            Completed 2015-2016 summer internship by developed simple automation management module to be used in Türkiye Şişe ve Cam Fabrikaları A.Ş.
                        </div>
                    </Event>
                </Timeline>
            </div>
        </section>
    )
}

export default Experiences;