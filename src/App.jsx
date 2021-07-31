import React from 'react';
//Importing css files
import './assets/scss/main.css';
//Importing react components
import NavBar from './components/navbar/Navbar';
import Presentation from './components/presentation/Presentation';
import Portfolio from './components/project/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
//Importing Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export function App(){

    return (
        <div className="container">
            <Router>
                    <Switch>
                        <Route path="/portfolio">
                            <Portfolio/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/">
                            <Presentation/>
                        </Route>
                    </Switch>
            </Router>
            <NavBar/>
         </div>


    )
}
