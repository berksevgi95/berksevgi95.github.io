import React from 'react';

import {
    TrophyOutlined,
    EditOutlined,
    CameraOutlined,
    CommentOutlined,
    HeartOutlined
} from '@ant-design/icons';

import './Activities.css'

const Activities = ({
    id
}) => {
    return (
        <article id={id} className="h-full overflow-auto view">
            <div className="h-full md:h-auto">
                <h1 className="title">Activities</h1>
                <div>
                    <h3>Participated Events & Courses</h3>
                    <ul className="list-none p-0">
                        <li className="flex items-center">
                            <div className="pin">
                                <TrophyOutlined />
                            </div>
                            <div>
                                <div>
                                    NATO ACT 2019 TIDE Hackathon
                                </div>
                                <div>
                                    <i>
                                        February 2019 - March 2019 &#183; Warsaw, Poland
                                    </i>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <div className="pin">
                                <EditOutlined />
                            </div>
                            <div>
                                <div>
                                    Configuration Management According to MIL-STD-973 from CM01
                                </div>
                                <div>
                                    <i>
                                        July 2018 - August 2018 &#183; Ankara, Turkey
                                    </i>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h3>Hobbies</h3>
                    <ul className="list-none p-0">
                        <li className="flex items-center">
                            <div className="pin">
                                <CameraOutlined />
                            </div>
                            <div>
                                Amateur photography
                            </div>
                        </li>
                        <li className="flex items-center">
                            <div className="pin">
                                <CommentOutlined />
                            </div>
                            <div>
                                Dancing
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <footer className="footer">
                <span className="flex items-center">
                    Made by BS with <HeartOutlined className="ml-1" />
                </span>
            </footer>
        </article>
    )
}

export default Activities;