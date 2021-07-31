import React from 'react'
import  './presentation.css';

export default function presentation() {
    return (
        <div className="main-content_p">
        <div className="main-info_p">
            <div className="logo_p">
                <a href="/">
                    <i className="fas fa-robot"></i>
                </a>
            </div>
            <div className="align-item-center_p">
                <div className="text_p">
                    <h1 className="first-text_p">Hello. I'm</h1>
                    <h1 className="second-text_p">Wilson</h1>
                    <h3 className="third-text_p">A web developer based in Peru, i enjoy learning things about software development.</h3>                      
                    <div className="btnr_p">
                         <a href="mailto:cornejo758@gmail.com" className="btn_p">Get in touch</a>
                    </div>
                    <ul className="links_p">
                        <li className="link-item_p"><a href="https://github.com/SaulLudena" target="_blank"><i className="fab fa-github"></i></a></li>
                        <li className="link-item_p"><a href="https://www.linkedin.com/in/wilson-cornejo/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    </ul>                      
                </div>
            </div>
        </div>
    </div>
    )
}
