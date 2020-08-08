import React from 'react';

import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    LinkedinOutlined,
    GlobalOutlined,
    BankOutlined,
    EditOutlined,
    GithubOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';
import Timeline, { Event } from '../../components/Timeline/Timeline';

import './PersonalInformation.css'

const PersonalInformation = ({
    id
}) => {
    return (
        <article id={id} className="h-full overflow-auto view">
            <div>
                <h1 className="title">Personal Information</h1>
                <div>
                    <h3>Details</h3>
                    <ul className="list-none p-0">
                        <li className="flex items-center">
                            <div className="pin">
                                <EnvironmentOutlined />
                            </div>
                            <span>
                                Osman Temiz Mah. 1026.Cad. No:13/10 Dikmen Çankaya Ankara, Turkey, 06540
                            </span>
                        </li>
                        <li className="flex items-center">
                            <div className="pin">
                                <PhoneOutlined />
                            </div>
                            <span>
                                545-550-37-28
                            </span>
                        </li>
                        <li className="flex items-center">
                            <div className="pin">
                                <MailOutlined />
                            </div>
                            <a className="link" href="mailto:berksevgi95@gmail.com">
                                berksevgi95@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center">
                            <div className="pin">
                                <LinkedinOutlined />
                            </div>
                            <a className="link" href="https://www.linkedin.com/in/berk-sevgi-661bb8146/">
                                /berk-sevgi-661bb8146
                            </a>
                        </li>
                        <li className="flex items-center">
                            <div className="pin">
                                <GlobalOutlined />
                            </div>
                            <a className="link" href="https://berksevgi95.github.io/me">
                                https://berksevgi95.github.io/me
                            </a>
                        </li>
                        <li className="flex items-center">
                            <div className="pin">
                                <GithubOutlined />
                            </div>
                            <a className="link" href="https://github.com/berksevgi95">
                                /berksevgi95
                            </a>
                        </li>
                    </ul>
                    <h3>Education</h3>
                    <Timeline className="pl-6">
                        <Event
                            title="Bachelor of Science"
                            subtitle="Hacettepe University, Faculty of Engineering, Computer Engineering"
                            dateInterval="2013 - 2018 2.94 / 4.00"
                        />
                        <Event
                            title="Highschool"
                            subtitle="Dikmen Highschool"
                            dateInterval="2009 - 2013 80.5 / 100.0"
                        />
                    </Timeline>
                    <div className="continue">
                        <a href="#experiences">Click to continue <ArrowRightOutlined /></a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default PersonalInformation;