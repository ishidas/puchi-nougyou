import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Logo from '../src/images/logo1.svg'
import Home from '../src/pages/home'
import About from '../src/pages/about'
import Contact from '../src/pages/contact'
import BlogOne from '../src/pages/blog1'

const Navigation = () => {
    return (
        <Router>
            <nav className='bg-opacity-60'>
                <ul className="flex">
                <li className="flex-grow">
                    <Link to="/about" className="text-blue-900 hover:text-blue-800 inline-block text-center w-full mt-3">About</Link>
                </li>
                <li className="flex-grow">
                    <Link to="/" className="text-blue-900 hover:text-blue-800 "><img className="w-12 my-0 m-auto mt-3" src={Logo} alt="logo"/></Link>
                </li>
                <li className="flex-grow">
                    <Link to="/contact" className="text-blue-900 hover:text-blue-800 inline-block text-center w-full mt-3">Contact</Link>
                </li>
                </ul>
            </nav>
            <div>
                <Switch>
                    <Route exact path="/">
                    <Home />
                    </Route>
                    <Route path="/about">
                    <About />
                    </Route>
                    <Route path="/contact">
                    <Contact />
                    </Route>
                    <Route path="/blog1">
                    <BlogOne />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navigation