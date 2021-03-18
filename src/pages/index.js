import * as React from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './home'
import About from './about'
import Contact from './contact'
import BlogOne from './blog1'
import Logo from '../images/logo1.svg'
// markup
const IndexPage = () => {
  let [ doc, setDocument ] = React.useState(null)
  React.useEffect(() => {
        if (window) {
          setDocument(window.document)
        }
    }, [setDocument])
  return (
        !doc ? <main></main> : <main className="text-gray-700"><Helmet>
        <meta charSet="utf-8" />
        <title>プチ農業</title>
      </Helmet>
      <Router>
        <div>
          <nav>
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
      </main>
  )
}

export default IndexPage
