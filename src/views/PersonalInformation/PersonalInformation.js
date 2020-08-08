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
                            <span>
                                berksevgi95@gmail.com
                            </span>
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
                    <ul className="list-none p-0">
                        <li className="flex items-center my-4">
                            <div className="pin">
                                <BankOutlined />
                            </div>
                            <div>
                                <div>
                                    BSc, Hacettepe University, Faculty of Engineering, Computer Engineering
                                </div>
                                <div className="mt-2">
                                    <i>2013 - 2018</i> &#183; <i>2.94 / 4.00</i>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center my-4">
                            <div className="pin">
                                <EditOutlined />
                            </div>
                            <div>
                                <div>
                                    HS, Dikmen Highschool
                                </div>
                                <div className="mt-2">
                                    <i>2009 - 2013</i> &#183; <i>80.5 / 100.0</i>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="continue">
                        <a href="#experiences">Go Ahead <ArrowRightOutlined /></a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default PersonalInformation;