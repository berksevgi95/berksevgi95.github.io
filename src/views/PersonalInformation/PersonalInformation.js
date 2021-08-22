import React from 'react';

import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    LinkedinOutlined,
    GlobalOutlined,
    GithubOutlined,
} from '@ant-design/icons';
import Timeline, { Event } from '../../components/Timeline/Timeline';

import './PersonalInformation.css'

const PersonalInformation = ({
    id
}) => {
    return (
        <article id={id} className="personal-information article">
            <div className="container">
                <h1 className="title">Personal Information</h1>
                <div>
                    <h3>Details</h3>
                    <ul className="personal-information-list">
                        <li className="personal-information-list-item">
                            <EnvironmentOutlined className="personal-information-list-item-icon"/>
                            <span>
                                Osman Temiz Mah. 1026.Cad. No:13/10 Dikmen Çankaya Ankara, Turkey, 06540
                            </span>
                        </li>
                        <li className="personal-information-list-item">
                            <PhoneOutlined className="personal-information-list-item-icon"/>
                            <span>
                                545-550-37-28
                            </span>
                        </li>
                        <li className="personal-information-list-item">
                            <MailOutlined className="personal-information-list-item-icon"/>
                            <a className="link" href="mailto:berksevgi95@gmail.com">
                                berksevgi95@gmail.com
                            </a>
                        </li>
                        <li className="personal-information-list-item">
                            <LinkedinOutlined className="personal-information-list-item-icon"/>
                            <a className="link" href="https://www.linkedin.com/in/berk-sevgi-661bb8146/">
                                /berk-sevgi-661bb8146
                            </a>
                        </li>
                        <li className="personal-information-list-item">
                            <GlobalOutlined className="personal-information-list-item-icon"/>
                            <a className="link" href="https://berksevgi95.github.io/me">
                                https://berksevgi95.github.io/me
                            </a>
                        </li>
                        <li className="personal-information-list-item">
                            <GithubOutlined className="personal-information-list-item-icon"/>
                            <a className="link" href="https://github.com/berksevgi95">
                                /berksevgi95
                            </a>
                        </li>
                    </ul>
                    <h3>Education</h3>
                    <Timeline>
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
                </div>
            </div>
        </article>
    )
}

export default PersonalInformation;