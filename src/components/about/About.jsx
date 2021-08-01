import React from 'react'
import './about.css';
export default function About() {
    return (
        <div className="main-content">
            <div className="main-info">
                <div className="logo">
                    <a href="/">
                        <i className="fas fa-robot"></i>
                    </a>
                </div>
                <div className="align-item-center">

                    <div className="text">
                        <h1 className="first-text">About me </h1>
                        <h1 className="second-text">
                            Hello there, i am Wilson Ludena a web developer based in Lima, Peru.<br/>
                            <br/>
                            I started to learn programming things 4 years ago, I enjoy building web pages and applications. My goals are getting all work experience possible and helping others to do the same.<br/>
                            <br/>
                            Here are a few technologies i've learned and actually i'm learning:
                        </h1>
                        <div className="knowledges">
                            <ul className="list">
                                <li className="list-item"><i className="fab fa-html5"></i><br/><p>Html</p></li>
                                <li className="list-item"><i className="fab fa-css3"></i><br/><p>Css</p></li>
                                <li className="list-item"><i className="fab fa-js-square"></i><br/><p>Javascript</p></li>
                                <li className="list-item"><i className="fab fa-react"></i><br/><p>ReactJs</p></li>
                                <li className="list-item"><i className="fab fa-react"></i><br/><p>ReactJs</p></li>
                                <li className="list-item"><i className="fab fa-java"></i><br/><p>Java</p></li>
                                <li className="list-item"><i className="fas fa-code"></i><br/><p>C#</p></li>
                                <li className="list-item"><i className="fab fa-php"></i><br/><p>Php</p></li>
                                <li className="list-item"><i className="fas fa-database"></i><br/><p>MySql</p></li>
                                <li className="list-item"><i className="fas fa-database"></i><br/><p>Sql Server</p></li>
                                <li className="list-item"><i className="fas fa-database"></i><br/><p>Oracle</p></li>
                                <li className="list-item"><i className="fas fa-database"></i><br/><p>Sql Server</p></li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
