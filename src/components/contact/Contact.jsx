import React from 'react'
import './contact.css';
export default function Contact() {
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
                        <h1 className="first-text">Contact me (⌣̩̩́_⌣̩̩̀)</h1>
                        <h1 className="alert-text">
                            I feeling sad telling you this, formulary in maintenance 
                        </h1>
                        <form action="contact.html" className="my-form" method="POST">
                            <div className="input-group">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="name" id="" placeholder="name"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="Name">Email</label>
                                <input type="text" name="mail" id="mail" placeholder="Email"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="Name">How can i help you ?</label>
                                <textarea name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="btn-submit">
                                <input type="button" id="" value="Send Message"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
