import React from 'react'
import './project.css';

export default function Projects() {
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
                        <h1 className="first-text">My projects</h1>
                        <h1 className="second-text">For over 4 years I’ve been designing and developing websites. Below are some of my favourites.</h1>
                        <div className="card-container">
                            <div className="card">
                                <div className="card-info">
                                    <h1 className="card-title">CatVet</h1>
                                    <h1 className="card-description">CatVet is a mobile appication that help to manage the resources a veterinary center.</h1>
                                    <ul className="list">
                                        <li className="list-item">#Java</li>
                                        <li className="list-item">#MySqli</li>
                                        <li className="list-item">#AndroidStudio</li>
                                    </ul>
                                    <div className="btnr">
                                        <a href="" className="btn">code coming soon</a>
                                    </div>
                                </div>
                                <div className="card-icon">
                                    <i className="fas fa-cat"></i>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-info">
                                    <h1 className="card-title">DFM</h1>
                                    <h1 className="card-description">"De Fruta Madre" is a project that expose the food letter of an fast food place.</h1>
                                    <ul className="list">
                                        <li className="list-item">#Html5</li>
                                        <li className="list-item">#Css3</li>
                                        <li className="list-item">#Javascript</li>
                                    </ul>
                                    <div className="btnr">
                                        <a href="https://github.com/SaulLudena/DFM" target="_blank" className="btn">code avaiable</a>
                                    </div>
                                </div>
                                <div className="card-icon">
                                    <i className="fas fa-hamburger"></i>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-info">
                                    <h1 className="card-title">Flopp Music</h1>
                                    <h1 className="card-description">Flopp music is a project where you can listen to your favourites artists.</h1>
                                    <ul className="list">
                                        <li className="list-item">#PHP</li>
                                        <li className="list-item">#Rest</li>
                                        <li className="list-item">#Ajax</li>
                                    </ul>
                                    <div className="btnr">
                                        <a href="" target="_blank" className="btn">code coming soon</a>
                                    </div>
                                </div>
                                <div className="card-icon">
                                    <i className="fas fa-headphones-alt"></i>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
