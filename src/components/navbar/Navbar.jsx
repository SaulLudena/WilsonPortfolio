import React from 'react'
import './navbar.css';
export default function Navbar() {
    return (
        <div className="navigation-bar">
            <div className="block">
                <a href="/portfolio" className="btn1"><i className="fas fa-project-diagram"></i>&nbsp;&nbsp;&nbsp;Portfolio</a>
            </div>
            <div className="block">
                <a href="/about" className="btn2"><i className="fas fa-cat"></i>&nbsp;&nbsp;&nbsp;About</a>
            </div>
            <div className="block">
                <a href="/contact" className="btn3"><i className="fas fa-id-card-alt"></i>&nbsp;&nbsp;&nbsp;Contact</a>
            </div>
        </div>
    )
}
